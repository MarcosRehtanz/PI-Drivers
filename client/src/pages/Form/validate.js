
export const validate = ({ name, surname, nationality, birthdate, description, teams }, setError) => {
    const error = {}

    if(!name) error.name = 'Cannot be empty'
    else if (/[^\w\s]/.test(name)) error.name = 'Symbols are not allowed'

    if(!surname) error.surname = 'Cannot be empty'
    else if (/[^\w\s]/.test(surname)) error.surname = 'Symbols are not allowed'

    if(!nationality) error.nationality = 'Cannot be empty'
    else if (/[^\w\s]/.test(nationality)) error.nationality = 'Symbols are not allowed'

    if(!birthdate) error.birthdate = 'Cannot be empty'

    if(!description) error.description = 'Cannot be empty'

    if(!teams.length) error.teams = 'Select at least one team'

    setError(error);
}