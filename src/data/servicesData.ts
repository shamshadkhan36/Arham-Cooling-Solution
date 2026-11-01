import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'split-ac-repair',
    title: 'Split AC Repair',
    category: 'ac',
    icon: 'SplitSquareVertical',
    shortDesc: 'Comprehensive repair solutions for indoor and outdoor split AC units with cooling issues, noise, or electrical faults.',
    features: [
      'Indoor blower & fan motor troubleshooting',
      'PCB circuit and sensor repair',
      'Compressor inspection and electrical check'
    ],
    popular: true
  },
  {
    id: 'window-ac-repair',
    title: 'Window AC Repair',
    category: 'ac',
    icon: 'AirVent',
    shortDesc: 'Reliable repair for all single-unit window air conditioners experiencing cooling drops, vibrations, or power issues.',
    features: [
      'Capacitor & fan motor replacement',
      'Coil cleaning and vibration damping',
      'Thermostat and temperature sensor checks'
    ]
  },
  {
    id: 'ac-installation',
    title: 'AC Installation',
    category: 'ac',
    icon: 'Wrench',
    shortDesc: 'Precise wall-mount and outdoor unit installation with proper piping, electrical connection, and level alignment.',
    features: [
      'Sturdy bracket fitting and vibration pads',
      'Copper piping and drain pipe routing',
      'Vacuuming and post-setup performance testing'
    ],
    popular: true
  },
  {
    id: 'ac-uninstallation',
    title: 'AC Uninstallation',
    category: 'ac',
    icon: 'ArrowDownToLine',
    shortDesc: 'Safe dismantling of split or window air conditioners with proper gas pump-down to prevent refrigerant loss.',
    features: [
      'Safe refrigerant lock-in (pump down)',
      'Careful indoor & outdoor unit removal',
      'Piping, wiring, and bracket pack-up'
    ]
  },
  {
    id: 'ac-gas-refilling',
    title: 'AC Gas Refilling',
    category: 'ac',
    icon: 'FlameKindling',
    shortDesc: 'Leak detection, pressure testing, and standard refrigerant top-up/refilling (R32, R410A, R22) for optimum cooling.',
    features: [
      'Nitrogen pressure test for micro-leaks',
      'Complete system vacuum before recharge',
      'Accurate refrigerant weight/pressure charge'
    ],
    popular: true
  },
  {
    id: 'ac-servicing',
    title: 'AC Servicing & Maintenance',
    category: 'ac',
    icon: 'Sparkles',
    shortDesc: 'Deep jet pump cleaning of cooling coils, filters, drainage trays, and exterior units for peak seasonal efficiency.',
    features: [
      'High-pressure water jet cleaning of condenser',
      'Cooling fin disinfection and filter wash',
      'Drain pipe flush to stop indoor water leaks'
    ]
  },
  {
    id: 'refrigerator-repair',
    title: 'Refrigerator Repair',
    category: 'refrigerator',
    icon: 'Refrigerator',
    shortDesc: 'Expert repair for single-door, double-door, and frost-free refrigerators facing cooling loss, power failure, or leaks.',
    features: [
      'Defrost timer, bi-metal & heater checks',
      'Compressor start relay and overload repair',
      'Thermostat & door gasket seal inspection'
    ],
    popular: true
  },
  {
    id: 'refrigerator-maintenance',
    title: 'Refrigerator Maintenance',
    category: 'refrigerator',
    icon: 'ShieldCheck',
    shortDesc: 'Routine preventative tune-up to extend compressor life, ensure balanced cooling, and lower electricity consumption.',
    features: [
      'Condenser coil cleaning & dust removal',
      'Drain hole unclogging and deodorization',
      'Temperature calibration and seal checks'
    ]
  },
  {
    id: 'cooling-diagnosis',
    title: 'Cooling Problem Diagnosis',
    category: 'diagnostic',
    icon: 'Activity',
    shortDesc: 'In-depth diagnostic checkup when your AC or fridge is running but not cooling properly, blowing warm air, or tripping.',
    features: [
      'Refrigerant pressure and temperature gauge test',
      'Electrical load and voltage stability check',
      'Airflow blockage and coil icing analysis'
    ]
  }
];

export const BUSINESS_INFO = {
  name: 'Arham Cooling Solution',
  phone: '+91 63861 18036',
  rawPhone: '+916386118036',
  whatsappNumber: '916386118036',
  address: 'Saripura, Alam Nagar, Lucknow, Uttar Pradesh, India',
  locality: 'Saripura, Alam Nagar, Lucknow',
  city: 'Lucknow',
  state: 'Uttar Pradesh',
  hours: '8:00 AM - 9:00 PM (Every Day)',
  mapsLink: 'https://maps.google.com/?q=Saripura,+Alam+Nagar,+Lucknow,+Uttar+Pradesh',
};
