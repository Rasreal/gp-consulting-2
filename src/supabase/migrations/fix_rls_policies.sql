-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access for solutions" ON solutions;

-- Create policy for public read access to solutions
CREATE POLICY "Allow public read access for solutions"
  ON solutions
  FOR SELECT
  TO PUBLIC
  USING (true);

-- Ensure RLS is enabled but the policy allows public read
ALTER TABLE solutions ENABLE ROW LEVEL SECURITY;

-- Verify the policy is working by granting necessary permissions
GRANT SELECT ON solutions TO anon;
GRANT SELECT ON solutions TO authenticated;

-- Add an index to improve query performance
CREATE INDEX IF NOT EXISTS solutions_created_at_idx ON solutions (created_at DESC);

-- Verify the current policies
SELECT * FROM pg_policies WHERE tablename = 'solutions'; 