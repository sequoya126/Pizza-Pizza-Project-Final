// Import the `createClient` function from Supabase
import { createClient } from '@supabase/supabase-js';

// Create a Supabase client
const supabaseUrl = 'https://gmkggjjojqsjahnbvsql.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdta2dnampvanFzamFobmJ2c3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2MDY5OTksImV4cCI6MjAzMzE4Mjk5OX0.8i8ZNnbRtIq7anRcJClzaYGTugszvanQuO5RYtgzNw0';
const supabase = createClient(supabaseUrl, supabaseKey);

// Event listener for sign-up form
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert('Sign up successful! Please sign in.');
    }
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
});

// Event listener for sign-in form
document.getElementById('signin-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;
  try {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert('Sign in successful!');
      // Redirect to another page or do something else after sign in
    }
  } catch (error) {
    console.error('Error signing in:', error.message);
  }
});
