Works for Inversify, NestJs or any dependency injection based framework.

Model Service:
- A service that has direct connection to database model.

What you have to do?
Just see the attached image.
I have created two services and two model service. The overall architecture follows the following rules:
- Use model services inside services.
- Services can not import each other in cycle
- Services should always use model services for database access
- A model service can not import another model service

Hope it will help. Bye

![[shapes.png]]

Thanks for reading 🙋