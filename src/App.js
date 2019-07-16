import { add } from './add'

// Returns a string of the sum of subTotal and shipping prepended with $
export const total = (subTotal, shipping) => `$${add(subTotal, shipping)}`
