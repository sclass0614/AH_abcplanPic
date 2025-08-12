const SUPABASE_URL = "https://dfomeijvzayyszisqflo.supabase.co";
const SUPABASE_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmb21laWp2emF5eXN6aXNxZmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NjYwNDIsImV4cCI6MjA2MDQ0MjA0Mn0.-r1iL04wvPNdBeIvgxqXLF2rWqIUX5Ot-qGQRdYo_qk"

function initSupabase() {
  if (!window.supabase || !window.supabase.from) {
    window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
  return window.supabase;
}

const supabase = initSupabase();

async function getactivities_plan() {
  try {
    const { data, error } = await supabase
      .from('activities_plan')
      .select('활동명, 시작시간, 종료시간, 참고사진url');
    
    if (error) {
      return [];
    }
    
    return data || [];
  } catch (error) {
    return [];
  }
}