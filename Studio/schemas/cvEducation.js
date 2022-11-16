export default {
    name: 'cvEducation',
    title: 'CV Education',
    type: 'document',
    fields: [
        {
            name: 'school',
            title: 'School',
            type: 'string'
        },
        {
            name: 'name',
            title: 'Name',
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
            name: 'description',
            title: 'Description',
            type: 'blockContent' //text field
        }
    ]
}