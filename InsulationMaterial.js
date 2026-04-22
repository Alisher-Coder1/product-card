import BuildingMaterial from "./BuildingMaterial.js";

export default class InsulationMaterial extends BuildingMaterial {
  constructor(name, price, thermalConductivity) {
    super(name, price);
    this.thermalConductivity = thermalConductivity;
  }

  showThermalInfo() {
    console.log(
      `${this.name} has thermal conductivity ${this.thermalConductivity}`,
    );
  }
}
