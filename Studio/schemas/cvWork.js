export default {
    name: 'cvWork',
    title: 'CV Work',
    type: 'document',
    fields: [
        {
            name: 'employer',
            title: 'Employer',
            type: 'string'
        },
        {
            name: 'from',
            title: 'From',
            type: 'date'
        },
        {
            name: 'to',
            title: 'To',
            type: 'date'
        },
        {
            name: 'active',
            title: 'Active',
            type: 'boolean'
        },
        {
            name: 'employmentFullTime',
            title: 'Full time',
            type: 'boolean'
        },
        {
            name: 'employmentPartTime',
            title: 'Part time',
            type: 'boolean'
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string'
        }, 
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent' //text field
        }
    ]
}