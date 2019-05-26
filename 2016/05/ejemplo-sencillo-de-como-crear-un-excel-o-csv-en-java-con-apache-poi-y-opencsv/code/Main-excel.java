package io.github.picodotdev.blogbitix.holamundoapachepoi;

...

public class Main {

    private static List<Object> DATA;

    static {
        DATA = Arrays.asList(new Object[] {
            new Object[] { "PlayStation 4 (PS4) - Consola 500GB", new BigDecimal("340.95"), "https://www.amazon.es/PlayStation-4-PS4-Consola-500GB/dp/B013U9CW8A" },
            new Object[] { "Raspberry Pi 3 Modelo B (1,2 GHz Quad-core ARM Cortex-A53, 1GB RAM, USB 2.0)", new BigDecimal("41.95"), "https://www.amazon.es/Raspberry-Modelo-GHz-Quad-core-Cortex-A53/dp/B01CD5VC92/" },
            new Object[] { "Gigabyte Brix - Barebón (Intel, Core i5, 2,6 GHz, 6, 35 cm (2.5\"), Serial ATA III, SO-DIMM) Negro ", new BigDecimal("421.36"), "https://www.amazon.es/Gigabyte-Brix-Bareb%C3%B3n-Serial-SO-DIMM/dp/B00HFCTUPM/" }
        });
    }

    public static void main(String[] args) throws Exception {
        writeExcel();
        readExcel();

        writeCsv();
        readCsv();
    }

    private static void writeExcel() throws Exception {
        HSSFWorkbook workbook = new HSSFWorkbook();
        HSSFSheet sheet = workbook.createSheet();
        workbook.setSheetName(0, "Hoja excel");

        String[] headers = new String[]{
                "Producto",
                "Precio",
                "Enlace"
        };

        CellStyle headerStyle = workbook.createCellStyle();
        Font font = workbook.createFont();
        font.setBold(true);
        headerStyle.setFont(font);

        CellStyle style = workbook.createCellStyle();
        style.setFillForegroundColor(IndexedColors.LIGHT_YELLOW.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);

        HSSFRow headerRow = sheet.createRow(0);
        for (int i = 0; i < headers.length; ++i) {
            String header = headers[i];
            HSSFCell cell = headerRow.createCell(i);
            cell.setCellStyle(headerStyle);
            cell.setCellValue(header);
        }

        for (int i = 0; i < DATA.size(); ++i) {
            HSSFRow dataRow = sheet.createRow(i + 1);

            Object[] d = (Object[]) DATA.get(i);
            String product = (String) d[0];
            BigDecimal price = (BigDecimal) d[1];
            String link = (String) d[2];

            dataRow.createCell(0).setCellValue(product);
            dataRow.createCell(1).setCellValue(price.doubleValue());
            dataRow.createCell(2).setCellValue(link);
        }

        HSSFRow dataRow = sheet.createRow(1 + DATA.size());
        HSSFCell total = dataRow.createCell(1);
        total.setCellType(CellType.FORMULA);
        total.setCellStyle(style);
        total.setCellFormula(String.format("SUM(B2:B%d)", 1 + DATA.size()));

        FileOutputStream file = new FileOutputStream("data.xls");
        workbook.write(file);
        file.close();
    }

    ...
}

