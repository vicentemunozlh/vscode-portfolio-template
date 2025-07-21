export interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileItem[];
  content?: string;
}

export const portfolioData: FileItem[] = [
  {
    id: 'projects',
    name: 'projects',
    type: 'folder',
    children: [
      {
        id: 'project-1',
        name: 'project-1.md',
        type: 'file',
        content: `#  Project 1 (Example)

A sample REST API project to demonstrate the portfolio format.

##  Tech Stack
- Node.js + Express
- PostgreSQL
- JWT Authentication
- Docker

## ✨ Features
- User authentication
- Product management
- Order processing
- API documentation

##  Code Example
\`\`\`javascript
// Sample API endpoint
app.get('/api/products', async (req, res) => {
  const products = await Product.findMany();
  res.json(products);
});
\`\`\`

## 🔗 Links
- [GitHub Repository](https://github.com/yourusername/project-1)`,
      },
      {
        id: 'project-2',
        name: 'project-2.md',
        type: 'file',
        content: `# 🏗️ Project 2 (Example)

A sample microservices project to demonstrate the portfolio format.

## 🏗️ Architecture
- Microservices with gRPC
- Apache Kafka for messaging
- Docker + Kubernetes
- Redis for caching

## ✨ Features
- Service-to-service communication
- Event-driven architecture
- Auto-scaling
- Health monitoring

##  Code Example
\`\`\`javascript
// Sample gRPC service
service UserService {
  rpc GetUser(GetUserRequest) returns (UserResponse);
  rpc CreateUser(CreateUserRequest) returns (UserResponse);
}
\`\`\`

## 🔗 Links
- [GitHub Repository](https://github.com/yourusername/project-2)`,
      },
      {
        id: 'project-3',
        name: 'project-3.md',
        type: 'file',
        content: `#  Project 3 (Example)

A sample real-time chat application to demonstrate the portfolio format.

## 🏗️ Tech Stack
- React + TypeScript
- Node.js + Socket.io
- MongoDB
- WebSocket connections

## ✨ Features
- Real-time messaging
- Group chat rooms
- File sharing
- User presence

##  Code Example
\`\`\`javascript
// Sample WebSocket handling
io.on('connection', (socket) => {
  socket.on('send-message', async (data) => {
    const message = await saveMessage(data);
    io.to(data.roomId).emit('new-message', message);
  });
});
\`\`\`

## 🔗 Links
- [GitHub Repository](https://github.com/yourusername/project-3)`,
      },
    ],
  },
  {
    id: 'hello',
    name: 'hello.md',
    type: 'file',
    content: `# 👋 Hello, I'm [YOUR NAME]!

*Template: Replace [YOUR NAME] with your actual name*

Welcome to my developer portfolio! I'm a passionate backend developer focused on building robust web applications.

## 🚀 About Me

I specialize in building scalable backend systems and modern web applications. 
With experience in traditional web development and cloud technologies, 
I love creating solutions that solve real-world problems.

## 🛠️ Skills

- **Backend Development**: Node.js, Python, Java, Go
- **Databases**: PostgreSQL, MongoDB, Redis
- **Cloud & DevOps**: Docker, Kubernetes, AWS, CI/CD
- **Other**: REST APIs, GraphQL, Microservices

##  Get in Touch

Feel free to explore my example projects in the folders above, or reach out to me at:
- Email: [your.email@example.com]
- LinkedIn: [LinkedIn Profile]
- GitHub: [GitHub Profile]

Happy coding! `,
  },
  {
    id: 'experience',
    name: 'experience.md',
    type: 'file',
    content: `# 💼 Professional Experience (Examples)

*Note: These are example experiences to demonstrate the portfolio format*

## Senior Backend Developer
**Example Tech Company** | *2022 - Present*
- Led development of microservices architecture
- Implemented real-time data processing pipelines
- Reduced API response times through optimization
- Mentored junior developers

## Full Stack Developer
**Sample Startup** | *2020 - 2022*
- Built RESTful APIs using Node.js and Express.js
- Developed frontend applications with React and TypeScript
- Integrated third-party services
- Deployed applications using Docker and Kubernetes

## Junior Developer
**Demo Solutions Ltd.** | *2019 - 2020*
- Created database schemas and optimized SQL queries
- Developed CRUD operations for web applications
- Collaborated with design team on UI/UX improvements
- Participated in agile development processes

##  Key Achievements

- **Scalability**: Scaled applications to handle increased traffic
- **Security**: Implemented OAuth 2.0 and JWT authentication systems
- **Performance**: Achieved high uptime for business applications
- **Innovation**: Introduced automated testing practices`,
  },
  {
    id: 'education',
    name: 'education.md',
    type: 'file',
    content: `# 🎓 Education (Examples)

*Note: These are example educational details to demonstrate the portfolio format*

## Master of Science in Computer Science
**Example University** | *2018 - 2020*
- **GPA**: 3.8/4.0
- **Thesis**: "Distributed Systems for Web Applications"
- **Relevant Coursework**: 
  - Advanced Algorithms and Data Structures
  - Distributed Systems
  - Machine Learning Fundamentals
  - Database Systems

## Bachelor of Science in Software Engineering
**Sample State University** | *2014 - 2018*
- **GPA**: 3.7/4.0
- **Honors**: Magna Cum Laude
- **Relevant Coursework**:
  - Software Architecture
  - Web Development
  - Database Design
  - Computer Networks

## 🏆 Certifications

- **AWS Certified Solutions Architect** | *2023*
- **Google Cloud Professional Developer** | *2022*
- **Certified Kubernetes Administrator (CKA)** | *2021*
- **MongoDB Certified Developer** | *2020*

## 📚 Additional Training

- **Advanced React Patterns** | *Frontend Masters* | *2020*
- **System Design Interview Prep** | *Educative.io* | *2019*
- **Microservices Architecture** | *Pluralsight* | *2019*

## 🎯 Academic Projects

- **Distributed File System**: Built a fault-tolerant file system using Go
- **Real-time Chat Application**: Developed with WebSocket and Redis
- **E-commerce Platform**: Full-stack application with payment integration`,
  },
];
