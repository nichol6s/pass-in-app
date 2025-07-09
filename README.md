# Pass-in app 💜

Welcome to the Pass-in repository, an attendee credential management application! It allows event attendees to conveniently manage their credentials.
Attendees can generate a credential code, register for events, upload a photo, and use a QRCode for check-in. This project was developed during the NLW Unite event hosted by [@Rocketseat](https://github.com/Rocketseat).

![alt text](assets/Banner.jpg)
---
## 💻 Features
- **Register:** Attendees who do not have a ticket can register for the event.
- **Customize Credential:** Attendees can personalize their credential by changing their photo.
- **QRCode:** Attendees can use their QRCode to check-in at the event quickly and easily.
- **Share Credential:** Attendees can share their credentials via a link.
- **Remove Ticket:** Attendees can remove their ticket from the credential page.

## 🌐 Technologies Used
- [React Native](https://reactnative.dev)
- [TypeScript](https://typescriptlang.org)
- [Expo](https://expo.dev)
- [NativeWind](https://nativewind.dev)
- [Zustand](https://zustand-demo.pmnd.rs)
- [Node.js](https://nodejs.org)
- [Moti](https://moti.fyi)

## 🚀 Getting Started

Our app has a separate back-end server, so the startup process will be slightly different.

### App
```sh
# Clone the repository
$ git clone https://github.com/nichol6s/pass-in-app

# Install the dependencies
$ npm install

# Start the app
$ npx expo start
```

### Back-end
To access the back-end server, go to the following repository: [Back-End Node](https://github.com/nichol6s/pass-in-backend)
```sh
# Clone the repository
$ git clone https://github.com/nichol6s/pass-in-backend

# Install the dependencies
$ npm install

# Create a .env file in the project root and add the following:
"DATABASE_URL="file:./dbsqlite.db”

# Execute the command
$ npx prisma generate

# Execute the command
$ npx prisma db seed

# Start the server
$ npm run dev

# To view the database through Prisma Studio, execute the command
$ npx prisma studio # Make sure Android Studio is not open at this time
```