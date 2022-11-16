export default { // key
    name: 'aboutMe', // value - kan kun vara ett ord
    title: 'About Me', //valgfri ord 
    type: 'document',
    fields: [
        {
            name: 'fullname', //name, title, type är alltid med
            title: 'Full name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug', // det som vises
            type: 'slug',
            options: {
                source: 'fullname',
                maxLength: 32,
            }
        },
        {
            name: 'profilePicture',
            title: 'Profile Picture',
            type: 'image',
        },
        {
            name: 'bio',
            title: ' Biography',
            type: 'blockContent' //text field
        }
    ]
}

// [] = array, indexbasert positioner 0-9
// {} = 
