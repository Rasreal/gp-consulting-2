-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous submissions (insert only)
CREATE POLICY "Allow anonymous submissions" 
  ON contact_submissions 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Only authenticated users with admin role can view submissions
CREATE POLICY "Only admins can view submissions" 
  ON contact_submissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated' AND auth.jwt() ->> 'role' = 'admin');

-- Create function to update updated_at on each update
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update updated_at automatically
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON contact_submissions
FOR EACH ROW
EXECUTE FUNCTION update_modified_column(); 