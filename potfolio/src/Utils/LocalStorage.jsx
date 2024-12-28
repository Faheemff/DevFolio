const employees = [
    {
        "employees": [
            {
                "id": 1,
                "email": "employee1@example.com",
                "password": "123",
                "tasks": [
                    {
                        "taskTitle": "Complete Project Report",
                        "taskDescription": "Prepare the final project report for submission.",
                        "taskDate": "2024-01-05",
                        "category": "Documentation",
                        "active": true,
                        "newTask": true,
                        "completed": false,
                        "failed": false
                    },
                    {
                        "taskTitle": "Fix Login Bug",
                        "taskDescription": "Resolve the issue with the login functionality.",
                        "taskDate": "2024-01-03",
                        "category": "Development",
                        "active": true,
                        "newTask": false,
                        "completed": false,
                        "failed": false
                    },
                    {
                        "taskTitle": "Design Homepage",
                        "taskDescription": "Create a new homepage layout for the website.",
                        "taskDate": "2024-01-07",
                        "category": "Design",
                        "active": false,
                        "newTask": true,
                        "completed": false,
                        "failed": false
                    }
                ]
            },
            {
                "id": 2,
                "email": "employee2@example.com",
                "password": "123",
                "tasks": [
                    {
                        "taskTitle": "Write Test Cases",
                        "taskDescription": "Develop test cases for the payment module.",
                        "taskDate": "2024-01-04",
                        "category": "Testing",
                        "active": true,
                        "newTask": false,
                        "completed": false,
                        "failed": false
                    },
                    {
                        "taskTitle": "Refactor Code",
                        "taskDescription": "Optimize the codebase for better performance.",
                        "taskDate": "2024-01-10",
                        "category": "Development",
                        "active": true,
                        "newTask": true,
                        "completed": false,
                        "failed": false
                    }
                ]
            },
            {
                "id": 3,
                "email": "employee3@example.com",
                "password": "123",
                "tasks": [
                    {
                        "taskTitle": "Update Inventory",
                        "taskDescription": "Ensure the inventory database is up to date.",
                        "taskDate": "2024-01-03",
                        "category": "Data Entry",
                        "active": true,
                        "newTask": false,
                        "completed": false,
                        "failed": false
                    },
                    {
                        "taskTitle": "Prepare Marketing Materials",
                        "taskDescription": "Design flyers and brochures for the campaign.",
                        "taskDate": "2024-01-08",
                        "category": "Marketing",
                        "active": false,
                        "newTask": true,
                        "completed": false,
                        "failed": false
                    }
                ]
            },
            {
                "id": 4,
                "email": "employee4@example.com",
                "password": "123",
                "tasks": [
                    {
                        "taskTitle": "Set Up Server",
                        "taskDescription": "Configure the new server for deployment.",
                        "taskDate": "2024-01-06",
                        "category": "IT",
                        "active": true,
                        "newTask": true,
                        "completed": false,
                        "failed": false
                    }
                ]
            },
            {
                "id": 5,
                "email": "employee5@example.com",
                "password": "123",
                "tasks": [
                    {
                        "taskTitle": "Customer Support",
                        "taskDescription": "Handle customer queries for the day.",
                        "taskDate": "2024-01-02",
                        "category": "Support",
                        "active": true,
                        "newTask": false,
                        "completed": true,
                        "failed": false
                    },
                    {
                        "taskTitle": "Update Blog",
                        "taskDescription": "Write and post an article about the latest updates.",
                        "taskDate": "2024-01-09",
                        "category": "Content",
                        "active": true,
                        "newTask": true,
                        "completed": false,
                        "failed": false
                    }
                ]
            }
        ]
    }
];

const admin = [
    {
        "admin": {
            "id": 1,
            "email": "admin@example.com",
            "password": "123"
        }
    }
];



export const  setLocalStorage = ()=> {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const  getLocalStorage = ()=> {
    
}