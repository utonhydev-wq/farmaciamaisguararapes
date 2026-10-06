export interface WhatsAppContact {
  id: string;
  label: string;
  url: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export const PHARMACY_INFO = {
  name: "Farmácia Mais Guararapes",
  slogan: "Cuidando da sua saúde com carinho, confiança e praticidade.",
  logoUrl: "https://i.postimg.cc/7Y05GNnP/566800465-18070305062257844-6780023452047120400-n.jpg",
  instagramUrl: "https://www.instagram.com/farmaciamaisguararapes?stkn=MXUxYjB1M3NjanA2",
  instagramHandle: "@farmaciamaisguararapes",
  mapsUrl: "https://maps.app.goo.gl/XWpCkERzXi4jJh9B7",
  whatsAppList: [
    {
      id: "whatsapp-1",
      label: "WhatsApp 1",
      url: "https://w.app/telefone1",
    },
    {
      id: "whatsapp-2",
      label: "WhatsApp 2",
      url: "https://w.app/telefone2",
    },
    {
      id: "whatsapp-3",
      label: "WhatsApp 3",
      url: "https://w.app/telefone3",
    },
  ] as WhatsAppContact[],
  preparedServices: [
    {
      id: "pedidos",
      name: "Pedidos",
      iconName: "ShoppingCart",
      description: "Envie sua lista de produtos ou receita médica",
    },
    {
      id: "promocoes",
      name: "Promoções",
      iconName: "Flame",
      description: "Ofertas e descontos especiais da farmácia",
    },
    {
      id: "medicamentos",
      name: "Medicamentos",
      iconName: "Pill",
      description: "Consulta de disponibilidade e orientação farmacêutica",
    },
    {
      id: "higiene-beleza",
      name: "Higiene e Beleza",
      iconName: "Sparkles",
      description: "Cuidados diários, dermocosméticos e perfumaria",
    },
    {
      id: "servicos-saude",
      name: "Serviços de Saúde",
      iconName: "Stethoscope",
      description: "Aferição, acompanhamento e cuidados para você",
    },
    {
      id: "delivery",
      name: "Delivery",
      iconName: "Package",
      description: "Entregas rápidas com segurança no conforto da sua casa",
    },
    {
      id: "ofertas",
      name: "Ofertas",
      iconName: "BadgePercent",
      description: "Seleção especial com preços diferenciados",
    },
    {
      id: "outros-canais",
      name: "Outros Canais",
      iconName: "Smartphone",
      description: "Central e opções complementares de contato",
    },
  ] as ServiceCategory[],
};
