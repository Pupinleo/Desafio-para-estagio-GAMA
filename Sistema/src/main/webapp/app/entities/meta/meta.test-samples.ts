import { IMeta, NewMeta } from './meta.model';

export const sampleWithRequiredData: IMeta = {
  id: 17187,
  valor: 350,
  area: 'Humanas',
};

export const sampleWithPartialData: IMeta = {
  id: 15622,
  valor: 741,
  area: 'Humanas',
};

export const sampleWithFullData: IMeta = {
  id: 32703,
  valor: 176,
  area: 'Linguagens',
};

export const sampleWithNewData: NewMeta = {
  valor: 497,
  area: 'Matematica',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
