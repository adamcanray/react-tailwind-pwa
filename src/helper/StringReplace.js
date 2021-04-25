/**
 * Helper that replaced a text/char from a String
 * @param {String} original_string 
 * @param {String} text_to_replace 
 * @param {String} text_that_replaces
 * @returns {String} 
 */
export default function StringReplace(original_string='', text_to_replace='', text_that_replaces=''){
  const replaced_string = original_string.replace(text_to_replace, text_that_replaces)
  return replaced_string
}