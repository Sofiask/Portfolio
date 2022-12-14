export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title', // overskriften som vises i Sanity
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 32,
            }
        },
        {
            name: 'cover',
            title: 'Cover image',
            type: 'image'
        },
        {
            name: 'description',
            title: 'Description of application', // overskriften som vises i Sanity
            type: 'string'
        },
        {
            name: 'brief',
            title: 'Brief',
            type: 'blockContent',
        },
        {
            name: 'coreProblem',
            title: 'Core problem',
            type: 'blockContent',
        },
        {
            name: 'solution',
            title: 'Solution',
            type: 'blockContent',
        },
        {
            name: 'links',
            title: 'Links to project',
            type: 'array', // flere av samma element
            of: [{type:'string'}] 
        },
        {
            name: 'gallery',
            title: 'Pictures',
            type: 'array', // flere av samma element
            of: [{type:'image'}] // av vad? images
        },
        {
            name: 'individualProject',
            title: 'Individual project',
            type: 'boolean'
        },
        {
            name: 'teamProject',
            title: 'Team project',
            type: 'boolean'
        },
        {
            name: 'schoolProject',
            title: 'School project',
            type: 'boolean'
        },
        {
            name: 'clientProject',
            title: 'Client project',
            type: 'boolean'
        },
    {   name: 'Date',
        title: 'Year',
        type: 'string',
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
        name: 'delivery',
        title: 'Delivery details',
        type: 'array',
        of: [
            {
                type: 'reference',
                to: [
                    {type: 'delivery'}
                ]
            }
        ]
    },
        {
            name: 'tools',
            title: 'Tools',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'software'}
                    ]
                }
            ]
        },
        {
            name: 'projectManagement',
            title: 'Project Management',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'projectManagement'}
                    ]
                }
            ]
        },
        {
            name: 'developmentTools',
            title: 'Development tools',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'developmentTools'}
                    ]
                }
            ]
        },
        {
            name: 'research',
            title: 'Research',
            type: 'blockContent',
        },
        {
            name: 'moodboard',
            title: 'Moodboard',
            type: 'blockContent',
        },
        {
            name: 'personas',
            title: 'Personas',
            type: 'blockContent',
        },
        {
            name: 'lofiUsertest',
            title: 'Lo-fi and usertests',
            type: 'blockContent',
        },
        {
            name: 'hifiUsertest',
            title: 'Hi-fi and usertests',
            type: 'blockContent',
        },
        {
            name: 'designsystem',
            title: 'Designsystem',
            type: 'blockContent',
        },
        {
            name: 'projectSolution',
            title: 'Project solution',
            type: 'blockContent',
        },
        {
            name: 'furtherDevelopment',
            title: 'Further development',
            type: 'blockContent',
        },
        {
            name: 'thingsILearned',
            title: 'Things I learned',
            type: 'blockContent',
        },

    ]
}
