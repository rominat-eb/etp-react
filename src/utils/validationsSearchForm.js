export const validate = values => {
    const errors = {}
    if (!values.searchEvent) {
      errors.searchEvent = 'You must add a term to search'
    } else if (values.searchEvent && values.searchEvent.length > 10) {
      errors.searchEvent = 'Your term search is too long'
    }
    return errors
}
