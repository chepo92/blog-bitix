package io.github.picodotdev.plugintapestry.pages;
...
public class Index {

  ...  
  @Property
  @Persist(value = PersistenceConstants.FLASH)
  private String pais;	
  ...
  @Environmental
  private JavaScriptSupport javascriptSupport;
  ...
  void afterRender() {
    javascriptSupport.require("app/index").invoke("init");
  }
  ...

  public SelectModel getPaisesSelectModel() {
    return new AbstractSelectModel() {
      @Override
      public List<OptionGroupModel> getOptionGroups() {
        OptionModel espana = new AppOptionModel("España", false, "espana", Collections.EMPTY_MAP);
        OptionModel francia = new AppOptionModel("Francia", false, "francia", Collections.EMPTY_MAP);
        OptionModel alemania = new AppOptionModel("Alemania", false, "alemania", Collections.EMPTY_MAP);

        OptionModel eeuu = new AppOptionModel("EEUU", false, "eeuu", Collections.EMPTY_MAP);
        OptionModel mexico = new AppOptionModel("Mexico", false, "mexico", Collections.EMPTY_MAP);
        OptionModel argentina = new AppOptionModel("Argentina", false, "argentina", Collections.EMPTY_MAP);

        OptionModel china = new AppOptionModel("China", false, "china", Collections.EMPTY_MAP);
        OptionModel japon = new AppOptionModel("Japón", false, "japon", Collections.EMPTY_MAP);
        OptionModel india = new AppOptionModel("India", true, "india", Collections.EMPTY_MAP);

        OptionGroupModel europa = new AppOptionGroupModel("Europa", false, Collections.EMPTY_MAP, Arrays.asList(espana, francia, alemania));
        OptionGroupModel america = new AppOptionGroupModel("America", false, Collections.EMPTY_MAP, Arrays.asList(eeuu, mexico, argentina));
        OptionGroupModel asia = new AppOptionGroupModel("Asia", false, Collections.EMPTY_MAP, Arrays.asList(china, japon, india));
        return Arrays.asList(europa, america, asia);
      }

      @Override
      public List<OptionModel> getOptions() {
        return null;
      }
    };
  }
}