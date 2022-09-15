# Ecommerce Server
### Content index

- [Definitions and Acronyms](#definitions-and-acronyms)
- [Change Log](#change-log)
- [Abstract](#abstract)
- [Goal/Objectives](#goalobjectives)
  - [StakeHolders](#stakeholders)
- [Assumptions](#assumptions)
- [Limitations & Unknowns](#limitations--unknowns)
- [Out of Scope](#out-of-scope)
- [Proposal](#proposal)
- [Costs](#costs)

### Definitions and Acronyms
**Note: many of these terms require knowledge on Clean Architecture, DDD, Solid Principles, for more information refer to https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html**

- Entities: Entities encapsulate Enterprise wide business rules
- Use Cases: The software in this layer contains application specific business rules.
- Interface Adapters: The software in this layer is a set of adapters that convert data from the format most convenient for the use cases and entities, to the format most convenient for some external agency such as the Database or the Web.
- Frameworks and Drivers: The outermost layer is generally composed of frameworks and tools such as the Database, the Web Framework, etc.
- Testable: The business rules can be tested without the UI, Database, Web Server, or any other external element.

### Change Log

### Abstract
This project aims to apply knowledge of Clean architecture and DDD in an ecommerce. The system will be using firebase services to save data in the cloud, manage payments and notify product delivery tracking in case the product needs it.

### Goal/Objectives
Provide an adequate architecture to be able to launch the api of an ecommerce salesforce that allows managing payments and monitoring product shipments.

In addition, this project is aimed at the open source software development community, to share the code of this project, as long as guides/practices/methodologies are used in its development.

### Stakeholders
- Project owner: [@Italo Barzola](https://github.com/italoantonio0909)
- Users: anyone interested in actively using this system with the intention of being able to consume entry points to connect it from a frontend and manage it as much as possible.
- Open-source community: anyone interested in using this software for learning purposes or those allowed by MIT License.

### Assumptions
- This is a high level design, is not ment to hold specifics of implementation of the presented components on this system.
- The currency in which purchase transactions are made is the dollar.
- Managing the product catalog and stock record should be an activity that the administrator should do manually.
- Information obtained from the Firebase Database considered the only source of truth.
- The frequency of information retrieval is subject to the actions of buyers or administrators, although Firebase provides real-time data retrieval, in the current design it is not included.
- The notifications sent will be validated, they will not be sent twice.
- Data communication between components will be done through the use of event emitters.
- Next steps(Phase 2) section attempts to reflect feedback, is not to be considered final, it may be updated continuously.

### Limitations & Unknowns
