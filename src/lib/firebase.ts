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

// Firebase configuration loaded (logging disabled for security)

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
} else {
  if (process.env.NODE_ENV === 'development') {
    console.log('✅ Firebase configuration loaded successfully');
  }
}

// Initialize Firebase
let app;
try {
  if (missingConfigFields.length > 0) {
    console.error('⚠️  Skipping Firebase initialization due to missing config values');
    throw new Error(`Missing Firebase config values: ${missingConfigFields.map(f => f.key).join(', ')}`);
  }
  app = initializeApp(firebaseConfig);
  if (process.env.NODE_ENV === 'development') {
    console.log("✅ Firebase App initialized successfully");
  }
} catch (error) {
  console.error('❌ Failed to initialize Firebase:', error);
  // Create a dummy app object to prevent runtime errors
  app = null;
}

// Initialize Analytics only on client side
let analytics: Analytics | undefined;
if (typeof window !== 'undefined' && app) {
  try {
    analytics = getAnalytics(app);
    if (process.env.NODE_ENV === 'development') {
      console.log("✅ Firebase Analytics initialized successfully");
    }
  } catch (e) {
    console.error("❌ Error initializing Firebase Analytics:", e);
  }
} else if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'development') {
    console.log("⚠️  Firebase Analytics not initialized - Firebase app failed to initialize");
  }
}

// Quick test function for debugging analytics
export const testAnalytics = () => {
  if (typeof window === 'undefined') {
    if (process.env.NODE_ENV === 'development') {
      console.log('testAnalytics called on server side - skipping');
    }
    return;
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('Testing Firebase Analytics...');
    console.log('Analytics object:', analytics);
  }
  
  if (analytics) {
    try {
      // Import logEvent dynamically to avoid server-side issues
      import('firebase/analytics').then(({ logEvent }) => {
        logEvent(analytics!, 'test_event', { 
          test: 'manual_trigger',
          timestamp: new Date().toISOString()
        });
        if (process.env.NODE_ENV === 'development') {
          console.log('✅ Test event sent successfully');
        }
      });
    } catch (error) {
      console.error('❌ Error sending test event:', error);
    }
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.log('❌ Analytics not available - check initialization');
    }
  }
};

export { app, analytics };