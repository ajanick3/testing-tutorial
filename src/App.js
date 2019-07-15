// Returns the sum of two numbers together
export const add = (x, y) => x + y

// Returns a string of the sum of subTotal and shipping prepended with $
export const totalCost = (subTotal, shipping) => `$${add(subTotal, shipping)}`
