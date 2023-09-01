export type EventType = {
    id: string;
    title: string;
    bg_type: string;
    bg_color: string;
    bg_image: {
        image_path?:string
    };
    bg_image_id: string;
    description: string;
    start_date: string;
    end_date: string;
    on_sale_date: string;
    user_ids: string[];
    currency_id: string;
    sales_volume: string;
    organiser_fees_volume: string;
    organiser_fee_fixed: string;
    organiser_fee_percentage: string;
    organiser: string;
    organiser_id: string;
    venue_name: string;
    venue_name_full: string;
    pre_order_display_message: string;
    post_order_display_message: string;
    social_share_text: string;
    social_show_facebook: string;
    social_show_linkedin: string;
    social_show_twitter: string;
    social_show_email: string;
    is_live: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    barcode_type: string;
    google_tag_manager_code: string;
    social_show_whatsapp: string;
    checkout_timeout_after: string;
    event_image_position: string;
    Location: string;
    locationId: string;
    Ticket: string;
}