package io.github.picodotdev.plugintapestry.components;

...

@SupportsInformalParameters
public class MultiSelect extends AbstractField {

    ...
    void beginRender(MarkupWriter writer) {
        ...

        JSONObject spec = new JSONObject();
        spec.put("clientId", getClientId());
        javaScriptSupport.require("app/multiselect").invoke("init").with(spec);
    }
    ...
    public SelectModel getPaisesSelectModel() {
        return new AbstractSelectModel() {
            @Override
            public List<OptionGroupModel> getOptionGroups() {
                Map<String,String> europe = new HashMap<String, String>();
                Map<String,String> america = new HashMap<String, String>();
                Map<String,String> asia = new HashMap<String, String>();
                europe.put("data-tokens", "europa");
                america.put("data-tokens", "america");
                asia.put("data-tokens", "asia");

                OptionModel espana = new AppOptionModel("España", false, "espana", europe);
                OptionModel francia = new AppOptionModel("Francia", false, "francia", europe);
                OptionModel alemania = new AppOptionModel("Alemania", false, "alemania", europe);

                OptionModel eeuu = new AppOptionModel("EEUU", false, "eeuu", america);
                OptionModel mexico = new AppOptionModel("Mexico", false, "mexico", america);
                OptionModel argentina = new AppOptionModel("Argentina", false, "argentina", america);

                OptionModel china = new AppOptionModel("China", false, "china", asia);
                OptionModel japon = new AppOptionModel("Japón", false, "japon", asia);
                OptionModel india = new AppOptionModel("India", true, "india", asia);

                OptionGroupModel europaGroup = new AppOptionGroupModel("Europa", false, Collections.EMPTY_MAP, Arrays.asList(espana, francia, alemania));
                OptionGroupModel americaGroup = new AppOptionGroupModel("América", false, Collections.EMPTY_MAP, Arrays.asList(eeuu, mexico, argentina));
                OptionGroupModel asiaGroup = new AppOptionGroupModel("Asia", false, Collections.EMPTY_MAP, Arrays.asList(china, japon, india));
                return Arrays.asList(europaGroup, americaGroup, asiaGroup);
            }

            @Override
            public List<OptionModel> getOptions() {
                return null;
            }
        };
    }
    ...
}
