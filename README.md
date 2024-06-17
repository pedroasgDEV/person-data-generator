# Person Data Generator

Person Data Generator is a web application that generates random person data such as names, addresses, phone numbers, and more. This project is built with Node.js and provides an easy-to-use interface for generating and viewing person data.

## Features

- Generate random person data including names, addresses, phone numbers, emails, and more.
- User-friendly interface for generating and viewing data.
- API endpoints for programmatic access to data generation.

## Installation

To get started with the Person Data Generator, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/pedroasgDEV/person-data-generator.git
cd person-data-generator
```

2. **Install dependencies:**

Make sure you have Node.js installed. Then run:

```bash
npm install
```

3. **Start the application:**

```bash
npm start
```

The application will be available at http://localhost:3000.

## Usage

### Web Interface

1. Open your web browser and go to http://localhost:3000.
2. Use the interface to generate person data.
3. Customize the options as needed and click "Generate".

### API Endpoints

You can also generate data programmatically using the provided API endpoints.

**Generate Random Person Data**

- Endpoint: /api/generate
- Method: GET
- Parameters:
    - count (optional): Number of person records to generate (default is 1).

**Example Request:**

```bash
curl http://localhost:3000/api/generate?count=5
```

**Example Response:**

```json
[
  {
    "name": "John Doe",
    "email": "okan.akgul@example.com",
    "phone": "555-1234",
    "adress": {
        "number": 4422,
        "street": "Doktorlar Cd",
        "city": "Çankırı",
        "state": "Uşak",
        "country": "Turkey",
        "postcode": 16998,
    },
    "img" : "https://randomuser.me/api/portraits/men/6.jpg",
    "CPF" : "123.456.789-10",
  },
]
```