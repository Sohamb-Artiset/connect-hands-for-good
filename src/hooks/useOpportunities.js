import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useOpportunities = () => {
  return useQuery({
    queryKey: ['opportunities'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('opportunities')
        .select(`
          *,
          organizations (
            name,
            verified
          )
        `)
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data?.map(opportunity => ({
        id: opportunity.id,
        title: opportunity.title,
        organization: opportunity.organizations?.name || 'Unknown Organization',
        location: opportunity.location,
        date: opportunity.date,
        duration: opportunity.duration,
        participants: opportunity.current_participants,
        maxParticipants: opportunity.max_participants,
        description: opportunity.description,
        skills: opportunity.required_skills || [],
        category: opportunity.category
      })) || [];
    }
  });
};