package io.github.picodotdev.plugintapestry.pages;

...

public class Index {

  ...

	public SelectModel getColoresSelectModel() {
		return new AbstractSelectModel() {
			@Override
			public List<OptionGroupModel> getOptionGroups() {
				return null;
			}

			@Override
			public List<OptionModel> getOptions() {
				OptionModel rojo = new AppOptionModel("Rojo", false, "rojo", Collections.EMPTY_MAP);
				OptionModel azul = new AppOptionModel("Azul", false, "azul", Collections.EMPTY_MAP);
				OptionModel verde = new AppOptionModel("Verde", false, "verde", Collections.EMPTY_MAP);
				return Arrays.asList(rojo, azul, verde);
			}
		};
	}
}