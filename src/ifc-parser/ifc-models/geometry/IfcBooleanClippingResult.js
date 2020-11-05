import { ifcDataTypes as d } from "../../utils/ifc-data-types.js";
import { ifcClass } from "../../utils/globalProperties.js";
import { getName, ifcTypes as t } from "../../utils/ifc-types.js";

const IfcBooleanClippingResult = {
  [ifcClass]: getName(t.IfcBooleanClippingResult),
  Operator: d.enum,
  FirstOperand: d.id,
  SecondOperand: d.id,
};

export { IfcBooleanClippingResult };