import { ProjectAetheriaArt, ProjectMonolithArt, ProjectTempoArt } from '../components/VectorArtAssets';

export const projectData = [
  {
    id: 'aetheria',
    title: 'Aetheria Botanicals',
    category: 'Brand Identity & Packaging',
    badge: 'Cobalt & Yellow',
    badgeClass: 'cobalt',
    description: 'A comprehensive geometric rebrand for a Nordic botanical apothecary. We translated medicinal herbs and distillation glassware into crisp silhouettes, monolithic typography, and tactile modular packaging labels.',
    client: 'Aetheria Nordic Labs',
    year: '2025',
    scope: 'Brand Mark, Label Systems, Custom Vector Icons, Packaging Guidelines',
    colorHexes: ['#142878', '#FFC226', '#2EC4B6', '#FA5246', '#FAF8F5'],
    artComponent: ProjectAetheriaArt,
    stageClass: 'stage-cobalt',
    layoutClass: 'work-layout-split',
    insight: 'By discarding standard hand-drawn botanical cliches in favor of pure Euclidean geometry, we established an authoritative yet organic identity that doubled retail shelf visibility in Copenhagen and Stockholm.'
  },
  {
    id: 'monolith',
    title: 'The Monolith Review',
    category: 'Editorial & Architectural Illustration',
    badge: 'Coral & Ink',
    badgeClass: 'coral',
    description: 'Quarterly cover design and 14 accompanying interior vector plates exploring radical European brutalist architecture, social housing public spaces, and urban human densities.',
    client: 'Monolith Architectural Press',
    year: '2025',
    scope: 'Cover Design, 14 Double-Page Vector Spreads, Editorial Typography',
    colorHexes: ['#FA5246', '#121620', '#FFC226', '#2EC4B6', '#FAF8F5'],
    artComponent: ProjectMonolithArt,
    stageClass: 'stage-coral',
    layoutClass: 'work-layout-reversed',
    insight: 'Isometric perspective combined with 2-point architectural elevations allowed complex multi-level urban plazas to be understood at a glance, resulting in a sold-out first print run within 72 hours.'
  },
  {
    id: 'tempo',
    title: 'Tempo Electric',
    category: 'Digital Campaign & Velocity Graphics',
    badge: 'Mint & High-Speed',
    badgeClass: 'mint',
    description: 'An international outdoor and digital launch campaign for Swedish electric cargo bicycles. Aerodynamic streamlines, kinetic vector typography, and modular vector poster assets across European transit hubs.',
    client: 'Tempo Mobility AB',
    year: '2026',
    scope: 'Launch Key Visuals, Transit Posters, Dynamic Social Vectors, Motion Styleguide',
    colorHexes: ['#1F9E92', '#121620', '#1E3BB3', '#FFC226', '#FAF8F5'],
    artComponent: ProjectTempoArt,
    stageClass: 'stage-mint',
    layoutClass: 'work-layout-split',
    insight: 'We represented silent velocity through clean wind curvature and crisp radial wheel geometries, creating an energetic campaign that achieved a 42% lift in B2B fleet pilot signups.'
  }
];
