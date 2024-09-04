import anime from 'animejs'
import { CourtIdsLookup } from './CourtIds'

let defaultShown = [
  CourtIdsLookup.Court_BackZone_1,
  CourtIdsLookup.Court_BackZone_2,
  CourtIdsLookup.Court_FrontZone_1,
  CourtIdsLookup.Court_FrontZone_2,
  CourtIdsLookup.SideLine_1,
  CourtIdsLookup.SideLine_2,
  CourtIdsLookup.EndLine_1,
  CourtIdsLookup.EndLine_2,
  CourtIdsLookup.Line_3_Meter,
  CourtIdsLookup.SeparationLine_1,
  CourtIdsLookup.SeparationLine_2,
  CourtIdsLookup.NetLine,
  CourtIdsLookup.ServeEdges,
]

/**
 * Removes highlight from all default elements except those passed in the ignore array.
 *
 * @param ignore - An array of CourtIds to ignore.
 *
 * @remarks
 * This method is part of the [CourtAnimations Utilities](./src/lib/components/court/CourtAnimations.ts).
 */
export const RemoveHighlightFromDefaults = (
  ignore?: (typeof CourtIdsLookup)[keyof typeof CourtIdsLookup][]
) => {
  anime({
    targets: defaultShown.filter((value, index) => !ignore?.includes(value)),
    opacity: 0.2,
    duration: 300,
    easing: 'easeInOutQuad',
  })
}

/**
 * Adds Highlight to all default elements except those passed in the ignore array.
 *
 * @param ignore - An array of CourtIds to ignore.
 *
 * @remarks
 * This method is part of the [CourtAnimations Utilities](./src/lib/components/court/CourtAnimations.ts).
 */
export const AddHighlightToDefaults = (
  ignore?: (typeof CourtIdsLookup)[keyof typeof CourtIdsLookup][]
) => {
  anime({
    targets: defaultShown.filter((value, index) => !ignore?.includes(value)),
    opacity: 1,
    duration: 300,
    easing: 'easeInOutQuad',
  })
}

/**
 * Adds stroke highlights all elements passed in the array.
 *
 * @param elements - An array of CourtIds to add stroke highlight to.
 *
 * @remarks
 * This method is part of the [CourtAnimations Utilities](./src/lib/components/court/CourtAnimations.ts).
 */
export const AddStrokeHighlight = (
  elements: (typeof CourtIdsLookup)[keyof typeof CourtIdsLookup][]
) => {
  anime({
    targets: elements,
    strokeWidth: 5,
    duration: 300,
    easing: 'easeInOutQuad',
  })
}

/**
 * Removes stroke highlight from all elements passed in the array.
 *
 * @param elements - An array of CourtIds to remove stroke highlight from.
 *
 * @remarks
 * This method is part of the [CourtAnimations Utilities](./src/lib/components/court/CourtAnimations.ts).
 */
export const RemoveStrokeHighlight = (
  elements: (typeof CourtIdsLookup)[keyof typeof CourtIdsLookup][]
) => {
  anime({
    targets: elements,
    strokeWidth: 5,
    duration: 300,
    easing: 'easeInOutQuad',
  })
}

/**
 * Adds highlight to all elements passed in the array.
 *
 * @param elements - An array of CourtIds to add highlight to.
 *
 * @remarks
 * This method is part of the [CourtAnimations Utilities](./src/lib/components/court/CourtAnimations.ts).
 */
export const AddHighlight = (
  elements: (typeof CourtIdsLookup)[keyof typeof CourtIdsLookup][]
) => {
  anime({
    targets: elements,
    opacity: 1,
    duration: 300,
    easing: 'easeInOutQuad',
  })
}

/**
 * Removes highlight from all elements passed in the array.
 *
 * @param elements - An array of CourtIds to remove highlight from.
 *
 * @remarks
 * This method is part of the [CourtAnimations Utilities](./src/lib/components/court/CourtAnimations.ts).
 */
export const RemoveHighlight = (
  elements: (typeof CourtIdsLookup)[keyof typeof CourtIdsLookup][]
) => {
  anime({
    targets: elements,
    opacity: 0,
    duration: 300,
    easing: 'easeInOutQuad',
  })
}
