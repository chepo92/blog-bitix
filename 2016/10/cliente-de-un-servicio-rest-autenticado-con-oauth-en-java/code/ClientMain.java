package io.github.picodotdev.blogbitix.springbootjaxrsoauth;

import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.TrustSelfSignedStrategy;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.ssl.SSLContexts;

import javax.json.Json;
import javax.json.JsonObject;
import java.util.ArrayList;
import java.util.List;

public class ClientMain {

    public static void main(String[] args) throws Exception {
        CloseableHttpClient client = HttpClients.custom()
                .setSSLSocketFactory(new SSLConnectionSocketFactory(SSLContexts.custom().loadTrustMaterial(null, new TrustSelfSignedStrategy()).build(), NoopHostnameVerifier.INSTANCE))
                .build();

        // curl -i http://localhost:9080/auth/realms/springbootjaxrs/.well-known/openid-configuration
        System.out.println("Getting configuration...");
        HttpGet configurationRequest = new HttpGet("http://localhost:9080/auth/realms/springbootjaxrs/.well-known/openid-configuration");
        CloseableHttpResponse configurationResponse = client.execute(configurationRequest);

        JsonObject configurarionObject = Json.createReader(configurationResponse.getEntity().getContent()).readObject();
        String tokenEndpoint = configurarionObject.getString("token_endpoint");
        configurationResponse.close();

        // curl -i http://localhost:9080/auth/realms/springbootjaxrs/protocol/openid-connect/token -d "grant_type=client_credentials&client_id=client&client_secret=06212c72-8734-4cd7-898d-7c4afb17e0a2"
        System.out.println("Getting an access token...");
        HttpPost tokenRequest = new HttpPost(tokenEndpoint);
        List<NameValuePair> data = new ArrayList<NameValuePair>();
        data.add(new BasicNameValuePair("grant_type", "client_credentials"));
        data.add(new BasicNameValuePair("client_id", "client"));
        data.add(new BasicNameValuePair("client_secret", "06212c72-8734-4cd7-898d-7c4afb17e0a2"));
        tokenRequest.setEntity(new UrlEncodedFormEntity(data));
        CloseableHttpResponse tokenResponse = client.execute(tokenRequest);

        JsonObject tokenObject = Json.createReader(tokenResponse.getEntity().getContent()).readObject();
        String accessToken = tokenObject.getString("access_token");
        Integer expiresIn = tokenObject.getInt("expires_in");
        Integer refreshExpires = tokenObject.getInt("refresh_expires_in");
        String refreshToken = tokenObject.getString("refresh_token");

        System.out.printf("Access token: %s%n", accessToken);
        System.out.printf("Expires in: %d%n", expiresIn);
        System.out.printf("Refresh expires in: %d%n", refreshExpires);
        System.out.printf("Refresh token: %s%n", refreshToken);

        // curl -ik -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3THpCZ20tcUZTdmlOUFA3V0RwYlF0N0tpaHhvM2t3dmxiTTNXODRuTVFnIn0.eyJqdGkiOiI5YTg0NzI5MS05MDkzLTRmNzMtOGIyMC0yZjIyY2NjN2FiMmQiLCJleHAiOjE0NzUzMDg5NzQsIm5iZiI6MCwiaWF0IjoxNDc1MzA4Njc0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODAvYXV0aC9yZWFsbXMvc3ByaW5nYm9vdGpheHJzIiwiYXVkIjoiY2xpZW50Iiwic3ViIjoiYzE4ZWExOGMtMDVlYS00MjE5LTg4YjEtMDIyNjU0ZDUzMWYxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY2xpZW50IiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiNDI4NDZlYjgtN2MxZS00NzM1LWFhMTYtMDdjYjY1Zjg4NWM4IiwiYWNyIjoiMSIsImNsaWVudF9zZXNzaW9uIjoiYjlhYzcwZDQtMThlOS00Mjk1LThmMWYtNDQ0ZGVhNGUwNTJiIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImFwaSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImNsaWVudCI6eyJyb2xlcyI6WyJhcGkiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJ2aWV3LXByb2ZpbGUiXX19LCJjbGllbnRIb3N0IjoiMTcyLjE3LjAuMSIsImNsaWVudElkIjoiY2xpZW50IiwibmFtZSI6IiIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC1hcGkiLCJjbGllbnRBZGRyZXNzIjoiMTcyLjE3LjAuMSIsImVtYWlsIjoic2VydmljZS1hY2NvdW50LWFwaUBwbGFjZWhvbGRlci5vcmcifQ.flw8cW1isddPqDGZVDQOrbtx6K1r-4Fzz5M39JmRsJkEyVyrNOWC5V1i5ks0zfEIzO9OED0vMFgQF7D2aAMgdCMsulGdGoeg0yi4ErI5-FNzAYYxRidKixmYOWo_fBSUSCoxEmzSkr-NJT6zHBwvx71bLZmeLCXHkuj0FegTVY09rh76isj4xmnPhVj2AgazGvbAIajX7YxMtPMevBs-SrxjoYZ_8w40VI1wV49lOAHCPhHANFqUJKdUytfONOq61PsEnzn_N7fXHNsJlHZ5Otduh--AjsGN0S5K4WmcIJlSgCJsABwp4FjU11sDzOpoAI3_Ktqs0uT_ka8wndhKKQ" https://localhost:8443/api/message?message=Hola
        System.out.println("Calling oauth secured service...");
        HttpGet serviceRequest = new HttpGet("https://localhost:8443/api/message?message=Hola");
        serviceRequest.addHeader("Authorization", "Bearer " + accessToken);
        CloseableHttpResponse serviceResponse = client.execute(serviceRequest);

        JsonObject serviceObject = Json.createReader(serviceResponse.getEntity().getContent()).readObject();

        System.out.printf("Result: %s%n", serviceObject.toString());
    }
}
