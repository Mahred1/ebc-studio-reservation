import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hfosufqskzimezdvnfrb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmb3N1ZnFza3ppbWV6ZHZuZnJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMTc4ODMsImV4cCI6MjA2Nzg5Mzg4M30.wri-vYlOIWn-DeDVA1eTsLgA83ZAswD4l-IjBKaaeFw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
