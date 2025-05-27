import { supabase } from '@/lib/supabase';

// Industry images mapping with proper typing
const industryImages: Record<string, string> = {
  'Транспорт': 'https://images.unsplash.com/photo-1603702712764-5977f5f34d56?auto=format&fit=crop&w=800&q=80',
  'Телеком': 'https://images.unsplash.com/photo-1580915411957-e3f8c46f6c5e?auto=format&fit=crop&w=800&q=80',
  'Финансы': 'https://images.unsplash.com/photo-1605902711622-cfb43c4437e3?auto=format&fit=crop&w=800&q=80',
  'Логистика': 'https://images.unsplash.com/photo-1591360451832-00b40c2d7147?auto=format&fit=crop&w=800&q=80',
  'Производство': 'https://images.unsplash.com/photo-1581093588401-6c61b6465f8b?auto=format&fit=crop&w=800&q=80',
  'Энергетика': 'https://images.unsplash.com/photo-1602526219403-bb0b372f2a78?auto=format&fit=crop&w=800&q=80',
  'default': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
};


async function updateIndustryImages() {
  console.log('Fetching all industries...');
  
  // First, get all industries
  const { data: industries, error: fetchError } = await supabase
    .from('industries')
    .select('*');
  
  if (fetchError) {
    console.error('Error fetching industries:', fetchError);
    return;
  }
  
  if (!industries || industries.length === 0) {
    console.log('No industries found to update');
    return;
  }
  
  console.log(`Found ${industries.length} industries to process`);
  
  // Update each industry with proper image_url if missing
  for (const industry of industries) {
    // Skip if already has a valid image_url
    if (industry.image_url && industry.image_url.startsWith('http')) {
      console.log(`Industry "${industry.title}" already has an image URL: ${industry.image_url}`);
      continue;
    }
    
    // Determine the image URL to use - safely access with type checking
    const imageUrl = industry.title in industryImages 
      ? industryImages[industry.title] 
      : industryImages['default'];
    
    console.log(`Updating industry "${industry.title}" with image URL: ${imageUrl}`);
    
    // Update the industry
    const { error: updateError } = await supabase
      .from('industries')
      .update({ image_url: imageUrl })
      .eq('id', industry.id);
    
    if (updateError) {
      console.error(`Error updating industry "${industry.title}":`, updateError);
    } else {
      console.log(`Successfully updated industry "${industry.title}"`);
    }
  }
  
  console.log('Industry image update process completed');
}

// Execute the function
updateIndustryImages()
  .catch(console.error)
  .finally(() => {
    console.log('Script execution completed');
    process.exit(0);
  }); 