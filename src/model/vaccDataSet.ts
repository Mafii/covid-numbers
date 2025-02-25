interface VaccDataSet {
  date: string;
  atLeastOneDoseTotal: number;
  atLeastOneDosePer100: number;
  atLeastOneDoseChg: number;
  partiallyVaccTotal: number;
  partiallyVaccPer100: number;
  fullyVaccinatedTotal: number;
  fullyVaccinatedPer100: number;
  fullyVaccinatedChg: number;
}

export default VaccDataSet;
