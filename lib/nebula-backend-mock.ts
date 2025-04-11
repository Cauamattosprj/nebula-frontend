export const getAllNotes = {
    "data": [
        {
            "id": "32ecd899-4050-4619-a470-2ea35fdccfe6",
            "title": "Titulo 12",
            "body": "Corpo da nota",
            "userId": "bdea2547-f383-495a-801c-d762a488b5b2",
            "createdAt": "2025-04-11T19:34:26.490505Z",
            "deleted": false
        },
        {
            "id": "692dbb4d-d496-4462-b776-48fea68b57b0",
            "title": "Flutter",
            "body": "## Estudando widgets no Flutter",
            "userId": "bdea2547-f383-495a-801c-d762a488b5b2",
            "createdAt": "2025-04-11T19:39:05.777450Z",
            "deleted": false
        }
    ],
    "message": "Operation completed",
    "success": true,
    "statusCode": 200
}

export const getNoteById = {
    "data": {
        "id": "692dbb4d-d496-4462-b776-48fea68b57b0",
        "title": "Flutter",
        "body": "## Estudando widgets no Flutter",
        "userId": "bdea2547-f383-495a-801c-d762a488b5b2",
        "createdAt": "2025-04-11T19:39:05.777450Z",
        "deleted": false
    },
    "message": "Operation completed",
    "success": true,
    "statusCode": 200
}

export const createFolder = {
    "data": {
        "id": "06dd4d43-1fef-436e-8804-82003ba892d9",
        "title": "Aprendendo Java",
        "notes": [],
        "createdAt": "2025-04-11T19:51:49.026745300Z",
        "deleted": false
    },
    "message": "Operation completed",
    "success": true,
    "statusCode": 200
}

export const listFolders = {
    "data": [
        {
            "id": "06dd4d43-1fef-436e-8804-82003ba892d9",
            "title": "Aprendendo Java",
            "notes": [],
            "createdAt": "2025-04-11T19:51:49.026745Z",
            "deleted": false
        }
    ],
    "message": "Operation completed",
    "success": true,
    "statusCode": 200
}