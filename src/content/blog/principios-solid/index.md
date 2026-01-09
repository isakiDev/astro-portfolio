---
title: "Principios SOLID"
description: "Aprende que son los principios SOLID y su importancia en el diseño de software."
date: 2026-01-02
tags: ["solid"]
draft: false
---

### Principios SOLID

Los principios SOLID son un conjunto de cinco principios fundamentales para diseñar software de manera eficiente, escalable y mantenible. Estos principios fueron propuestos por Robert C. Martin (también conocido como Uncle Bob) en su libro "Clean Code". A continuación, te presento cada uno de los principios SOLID:


1. **Principio de Responsabilidad Única (Single Responsibility Principle - SRP)**
2. **Principio Abierto/Cerrado (Open/Closed Principle - OCP)**
3. **Principio de Sustitución de Liskov (Liskov Substitution Principle
4. **Principio de Segregación de Interfaces (Interface Segregation Principle - ISP)** 
5. **Principio de Inversión de Dependencias (Dependency Inversion Principle - DIP)**


```ts
// Ejemplo de SRP en TypeScript
class EmailService {
  sendEmail(user: User, message: string):
  {
    // Lógica para enviar un email
  }
}
```