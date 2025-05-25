-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meeting_type TEXT NOT NULL,
  meeting_date DATE NOT NULL,
  meeting_time TIME NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS policies
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anonymous submissions (insert only)
CREATE POLICY "Allow anonymous submissions" 
  ON bookings 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Only authenticated users with admin role can view and manage bookings
CREATE POLICY "Only admins can view bookings" 
  ON bookings 
  FOR SELECT 
  USING (auth.role() = 'authenticated' AND auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Only admins can update bookings" 
  ON bookings 
  FOR UPDATE
  USING (auth.role() = 'authenticated' AND auth.jwt() ->> 'role' = 'admin')
  WITH CHECK (auth.role() = 'authenticated' AND auth.jwt() ->> 'role' = 'admin');

-- Create function to update updated_at on each update
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update updated_at automatically
CREATE TRIGGER update_bookings_updated_at
BEFORE UPDATE ON bookings
FOR EACH ROW
EXECUTE FUNCTION update_modified_column(); 