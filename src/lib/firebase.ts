// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

console.log("Firebase Config:", firebaseConfig);
console.log("Environment variables check:", {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'PRESENT' : 'MISSING',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'PRESENT' : 'MISSING',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? 'PRESENT' : 'MISSING',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? 'PRESENT' : 'MISSING',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? 'PRESENT' : 'MISSING',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? 'PRESENT' : 'MISSING',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ? 'PRESENT' : 'MISSING',
  allEnvVars: Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC_FIREBASE'))
});

// Validate required Firebase config values (check actual config object instead of env vars)
const requiredConfigFields = [
  { key: 'apiKey', value: firebaseConfig.apiKey },
  { key: 'authDomain', value: firebaseConfig.authDomain },
  { key: 'projectId', value: firebaseConfig.projectId },
  { key: 'storageBucket', value: firebaseConfig.storageBucket },
  { key: 'messagingSenderId', value: firebaseConfig.messagingSenderId },
  { key: 'appId', value: firebaseConfig.appId }
];

const missingConfigFields = requiredConfigFields.filter(field => !field.value);
if (missingConfigFields.length > 0) {
  console.error('❌ Missing required Firebase config values:', missingConfigFields.map(f => f.key));
  console.error('Firebase config object:', firebaseConfig);
} else {
  console.log('✅ All required Firebase config values are present');
}

// Initialize Firebase
let app;
try {
  if (missingConfigFields.length > 0) {
    console.error('⚠️  Skipping Firebase initialization due to missing config values');
    throw new Error(`Missing Firebase config values: ${missingConfigFields.map(f => f.key).join(', ')}`);
  }
  app = initializeApp(firebaseConfig);
  console.log("✅ Firebase App initialized successfully:", app.name);
} catch (error) {
  console.error('❌ Failed to initialize Firebase:', error);
  // Create a dummy app object to prevent runtime errors
  app = null;
}

// Initialize Analytics only on client side
let analytics: Analytics | undefined;
if (typeof window !== 'undefined' && app) {
  // Log all firebaseConfig values on the client side
  console.log("Client-side Firebase config status:");
  console.log("  apiKey:", firebaseConfig.apiKey ? "PRESENT" : "MISSING");
  console.log("  authDomain:", firebaseConfig.authDomain ? "PRESENT" : "MISSING");
  console.log("  projectId:", firebaseConfig.projectId ? "PRESENT" : "MISSING");
  console.log("  storageBucket:", firebaseConfig.storageBucket ? "PRESENT" : "MISSING");
  console.log("  messagingSenderId:", firebaseConfig.messagingSenderId ? "PRESENT" : "MISSING");
  console.log("  appId:", firebaseConfig.appId ? "PRESENT" : "MISSING");
  console.log("  measurementId:", firebaseConfig.measurementId ? "PRESENT" : "MISSING");

  try {
    analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized on client side."); // Log Analytics initialization
  } catch (e) {
    console.error("Error initializing Firebase Analytics on client side:", e); // Log any errors during Analytics initialization
  }
} else if (typeof window !== 'undefined') {
  console.log("Firebase Analytics not initialized - Firebase app failed to initialize.");
} else {
  console.log("Firebase Analytics not initialized on server side."); // Indicate Analytics skipped on server
}

// Quick test function for debugging analytics
export const testAnalytics = () => {
  if (typeof window === 'undefined') {
    console.log('testAnalytics called on server side - skipping');
    return;
  }
  
  console.log('Testing Firebase Analytics...');
  console.log('Analytics object:', analytics);
  
  if (analytics) {
    try {
      // Import logEvent dynamically to avoid server-side issues
      import('firebase/analytics').then(({ logEvent }) => {
        logEvent(analytics!, 'test_event', { 
          test: 'manual_trigger',
          timestamp: new Date().toISOString()
        });
        console.log('✅ Test event sent successfully');
      });
    } catch (error) {
      console.error('❌ Error sending test event:', error);
    }
  } else {
    console.log('❌ Analytics not available - check initialization');
  }
};

export { app, analytics };