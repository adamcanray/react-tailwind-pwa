/**
 * Theme ClassName is use for UI Component className
 * @param {String} theme 
 * @param {String} themeColorVariants 
 */
const ThemeClassName = ({theme, themeColorVariants}) => {
  return {
    input: {
      type: {
        base: `block w-full dark:text-gray-300 border border-gray-300 dark:border-gray-400 dark:bg-gray-700 rounded-md`,
        radio: `text-${themeColorVariants}-600 dark:text-gray-600 focus:outline-none focus:ring focus:ring-${themeColorVariants}-200 dark:focus:ring-gray-200 border-gray-300 dark:border-gray-200 dark:bg-gray-700`,
        checkbox: `text-${themeColorVariants}-600 dark:text-gray-600 focus:outline-none focus:ring focus:ring-${themeColorVariants}-200 dark:focus:ring-gray-200 border-gray-300 dark:border-gray-200 dark:bg-gray-700 rounded-md`,
      }, 
      active: `focus:border-transparent focus:outline-none focus:ring focus:ring-${themeColorVariants}-200 dark:focus:ring-gray-400`,
      disabled: `cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800`,
      valid: `border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green`,
      invalid: `border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red`,
    },
  } 
}
export default ThemeClassName