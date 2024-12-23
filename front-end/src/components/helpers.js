import conservativeLogo from "../assets/party-logos/conservative.png";
import liberalLogo from "../assets/party-logos/liberal.png";
import ndpLogo from "../assets/party-logos/ndp.png";
import greenLogo from "../assets/party-logos/green.png";

export const parties = {
  CONSERVATIVE: {
    value: "conservative",
    label: "Conservative",
    pluralLabel: "Conservatives",
    description:
      "The Conservative Party of Canada is a center-right political party that focuses on fiscal responsibility, individual freedoms, and limited government intervention. Their policies prioritize economic growth through lower taxes, reduced government spending, and support for private enterprise. They advocate for strong national defense, tougher criminal justice measures, and policies that uphold traditional values. While the party supports resource development and the energy sector as drivers of economic growth, it also promotes environmental conservation through market-based solutions. The Conservatives emphasize personal responsibility, family values, and protecting Canadian sovereignty.",
    logo: conservativeLogo,
  },
  LIBERAL: {
    value: "liberal",
    label: "Liberal",
    pluralLabel: "Liberals",
    description:
      "The Liberal Party of Canada is a centrist political party that emphasizes balancing economic growth with social progress. They advocate for a strong middle class, investing in public services like healthcare, childcare, and infrastructure, and promoting diversity and inclusion. The Liberals prioritize climate action with policies aimed at reducing greenhouse gas emissions while fostering green economic growth. They support progressive taxation, reconciliation with Indigenous Peoples, and international cooperation in foreign policy. Their platform combines fiscal responsibility with a commitment to advancing social equality and innovation.",
    logo: liberalLogo,
  },
  NDP: {
    value: "ndp",
    label: "New Democratic Party",
    pluralLabel: "New Democrats",
    description:
      "The New Democratic Party (NDP) of Canada is a progressive, center-left party that advocates for reducing economic inequality, strengthening public services, and addressing social justice issues. Their core values include expanding universal healthcare to include pharmacare and dental care, protecting workers’ rights, ensuring affordable housing, and combating climate change through a green economy transition. The NDP also emphasizes reconciliation with Indigenous Peoples, equity for marginalized communities, and investments in public education and childcare. They prioritize social equity, environmental sustainability, and public ownership to create a fairer, more inclusive society.",
    logo: ndpLogo,
  },
  GREEN: {
    value: "green",
    label: "Green",
    pluralLabel: "Greens",
    description:
      "The Green Party of Canada is a progressive party centered on environmental sustainability and social justice. Their policies focus on transitioning to a carbon-neutral economy, protecting ecosystems, and promoting renewable energy. They advocate for strong climate action, reducing income inequality, and enhancing public services such as healthcare, education, and affordable housing. The party also emphasizes grassroots democracy, equity for marginalized groups, and non-violent foreign policy. The Green Party seeks to create a sustainable future by prioritizing environmental stewardship, social equity, and economic resilience.",
    logo: greenLogo,
  },
};

export const WORD_MINIMUM = 20;

export const FORM_PLACEHOLDER_TEXT =
  "I see Canadian policy beliefs as rooted in pragmatism and a focus on long-term stability. They emphasize fiscal discipline, promoting balanced budgets and efficient use of taxpayer dollars, which aligns with the principle of limited government. Policies often advocate for fostering economic growth through lower taxes and empowering the private sector, while prioritizing public safety and national defense. Immigration is approached with a focus on security and integration, ensuring policies serve both the nation’s interests and newcomers. For me, the environmental stance—balancing resource development with sustainability—reflects a practical approach to preserving economic opportunities while safeguarding natural assets.";
