import { createContext, use, useContext } from "react";


export interface list {
  id: String,
  question: String,
  category: String,
  weight: Number,
}

export const listContext = createContext<list[]|undefined>(undefined)

export const useListContext = () => {
   const listitem = useContext(listContext); 
}


const behavioralAwarenessQuestions = [
  // --- Section A: Phishing & Scam Recognition (Weight: 25 points) ---
  {
    id: "A1",
    question: "Do you always verify the actual sender's email address (not just the display name) before clicking a link or providing information?",
    category: "Email Verification",
    weight: 3, // Critical defense against phishing
  },
  {
    id: "A2",
    question: "If you receive a text message from your bank or a company, do you navigate to their official website/app yourself instead of clicking the link in the message?",
    category: "SMS/Smishing Avoidance",
    weight: 3, // Critical defense against smishing
  },
  {
    id: "A3",
    question: "If an email has poor grammar, spelling mistakes, or an overly urgent tone, do you treat it as suspicious?",
    category: "Urgency & Quality Flags",
    weight: 2,
  },
  {
    id: "A4",
    question: "Do you recognize that legitimate companies will never ask for your password, PIN, or 2FA code via email, phone call, or text?",
    category: "Credential Honesty",
    weight: 3, // Core knowledge
  },
  {
    id: "A5",
    question: "Do you avoid calling back phone numbers left in suspicious voicemails that claim to be from 'tech support' or the 'IRS/Tax Agency'?",
    category: "Vishing (Voice Phishing)",
    weight: 2,
  },
  {
    id: "A6",
    question: "Do you hover your mouse over a link (on a computer) or long-press it (on mobile) to see the actual URL before clicking?",
    category: "Link Inspection",
    weight: 2,
  },
  {
    id: "A7",
    question: "Do you avoid participating in 'free prize' surveys or pop-ups that ask for personal information (like your full name and address)?",
    category: "Giveaway Scams",
    weight: 2,
  },
  {
    id: "A8",
    question: "Are you aware that a red 'Untrusted' or 'Not Secure' warning in your browser means you should immediately stop interacting with that page?",
    category: "HTTPS Recognition",
    weight: 3, // Basic website security check
  },
  {
    id: "A9",
    question: "Do you avoid sharing sensitive screenshots (like ticket barcodes or financial statements) on social media?",
    category: "Information Leakage",
    weight: 2,
  },
  {
    id: "A10",
    question: "If you receive a friend request from someone you know, do you verify with them via another channel before accepting (checking for clone accounts)?",
    category: "Social Cloning Detection",
    weight: 2,
  },

  // --- Section B: Online Privacy & Information Sharing (Weight: 23 points) ---
  {
    id: "B11",
    question: "Do you use a separate, dedicated web browser (or incognito mode) when performing sensitive tasks like banking or tax payments?",
    category: "Session Separation",
    weight: 2,
  },
  {
    id: "B12",
    question: "Do you limit the amount of personal information (e.g., current location, travel plans, detailed family history) you post on social media profiles?",
    category: "Data Minimization",
    weight: 2,
  },
  {
    id: "B13",
    question: "Have you disabled ad personalization and tracking features on your social media platforms and search engines?",
    category: "Tracking Minimization",
    weight: 2,
  },
  {
    id: "B14",
    question: "Do you use ad-blocking software or browser extensions to prevent intrusive or malicious advertisements?",
    category: "Malvertising Prevention",
    weight: 2,
  },
  {
    id: "B15",
    question: "Do you routinely check and adjust the privacy settings on all your social media and messaging apps?",
    category: "Privacy Setting Audit",
    weight: 3, // Requires active maintenance
  },
  {
    id: "B16",
    question: "When signing up for a new service, do you read the Privacy Policy to understand what data is collected (even if briefly)?",
    category: "Policy Awareness",
    weight: 2,
  },
  {
    id: "B17",
    question: "Do you decline or limit location tracking access to apps that do not explicitly need it to function (e.g., weather apps)?",
    category: "Location Privacy",
    weight: 3, // Critical for mobile privacy
  },
  {
    id: "B18",
    question: "Do you use privacy-focused search engines (like DuckDuckGo) instead of those that track and store your queries?",
    category: "Search Privacy",
    weight: 2,
  },
  {
    id: "B19",
    question: "Do you decline to connect third-party apps and games to your primary social media accounts (like Facebook or Google)?",
    category: "Third-Party App Vetting",
    weight: 3, // Limits data sharing
  },
  {
    id: "B20",
    question: "When given the choice, do you choose to create an account with an email address instead of using 'Sign in with Google/Apple/Facebook'?",
    category: "Identity Linking Avoidance",
    weight: 2,
  },

  // --- Section C: Software & Download Practices (Weight: 24 points) ---
  {
    id: "C21",
    question: "Do you only install apps on your phone from the official Apple App Store or Google Play Store?",
    category: "Official Source Only",
    weight: 3, // Critical malware prevention
  },
  {
    id: "C22",
    question: "When downloading software for your computer, do you use the official developer's website and not a third-party site?",
    category: "Authorized Downloads",
    weight: 2,
  },
  {
    id: "C23",
    question: "Do you avoid opening or using files (documents, executables) sent to you by unknown people or contacts without prior verification?",
    category: "File Vetting",
    weight: 2,
  },
  {
    id: "C24",
    question: "When installing new software, do you read the terms and decline any 'extra' bundled programs or toolbar installations?",
    category: "Bundleware Avoidance",
    weight: 2,
  },
  {
    id: "C25",
    question: "Do you know how to safely remove an app from your device and do you uninstall unused apps after a few months?",
    category: "Uninstall Hygiene",
    weight: 2,
  },
  {
    id: "C26",
    question: "Do you avoid downloading and using pirated software, movies, or music?",
    category: "Illicit Download Risk",
    weight: 3, // High malware risk
  },
  {
    id: "C27",
    question: "Do you use a secure file transfer method (like a cloud link) instead of emailing sensitive documents as attachments?",
    category: "Secure Transfer Method",
    weight: 2,
  },
  {
    id: "C28",
    question: "Are you aware of the concept of 'Zero-Day' vulnerabilities and how quickly you need to apply patches when available?",
    category: "Zero-Day Awareness",
    weight: 2,
  },
  {
    id: "C29",
    question: "Do you avoid signing in to personal accounts (email, social media) on a shared computer, like in a library or internet cafe?",
    category: "Public PC Risk",
    weight: 3, // Critical session risk
  },
  {
    id: "C30",
    question: "If you suspect one of your devices is infected, do you immediately disconnect it from your Wi-Fi network?",
    category: "Infection Containment",
    weight: 3, // Critical damage control
  },
];

export const accountSecurityQuestionsV2 = [
  // --- Section A: Password Hygiene & Strength (Weight: 24 points) ---
  {
    id: "A1",
    question: "Do you use a password manager (e.g., 1Password, LastPass, Google/Apple Keychain) to generate and securely store all your passwords?",
    category: "Centralized Storage",
    weight: 3, // Critical best practice
  },
  {
    id: "A2",
    question: "Are all your main account passwords (email, bank, cloud storage) at least 12 characters long?",
    category: "Length",
    weight: 3, // Critical length
  },
  {
    id: "A3",
    question: "Do your primary passwords include a mix of uppercase letters, lowercase letters, numbers, and symbols?",
    category: "Complexity",
    weight: 2,
  },
  {
    id: "A4",
    question: "Do you avoid using dictionary words, names, dates of birth, or sequential numbers in your passwords?",
    category: "Predictability",
    weight: 2,
  },
  {
  // A5 focuses on reactive measures after a potential breach
    id: "A5",
    question: "Have you scanned your primary passwords for known breaches (e.g., using a service like 'Have I Been Pwned' or built-in browser tools)?",
    category: "Breach Monitoring",
    weight: 2,
  },
  {
    id: "A6",
    question: "Do you avoid writing down your passwords on physical paper or digital files (like a sticky note or unprotected spreadsheet)?",
    category: "Physical Security",
    weight: 2,
  },
  {
    id: "A7",
    question: "Do you use a separate, complex password just for your password manager itself (if applicable)?",
    category: "Master Key Protection",
    weight: 3, // Critical to protect the vault
  },
  {
    id: "A8",
    question: "Do you avoid using the 'Remember Me' or 'Keep Me Logged In' feature on shared or public computers?",
    category: "Session Management",
    weight: 2,
  },
  {
    id: "A9",
    question: "Do you avoid reusing the password you use for your primary email for *any* other account?",
    category: "Credential Separation",
    weight: 3, // Critical: stops cascading breaches
  },
  {
    id: "A10",
    question: "Do you refrain from using keyboard patterns (like 'qwerty' or 'asdfgh') or simple repetitions in your passwords?",
    category: "Pattern Avoidance",
    weight: 2,
  },

  // --- Section B: Multi-Factor Authentication (MFA/2FA) (Weight: 28 points) ---
  {
    id: "B11",
    question: "Is 2FA enabled on your primary email account?",
    category: "Primary Email",
    weight: 3, // Critical: email is the master key
  },
  {
    id: "B12",
    question: "Is 2FA enabled on your banking and financial institution accounts?",
    category: "Financial Security",
    weight: 3, // Critical
  },
  {
    id: "B13",
    question: "Is 2FA enabled on your social media accounts (Facebook, Instagram, LinkedIn, etc.)?",
    category: "Social Media & Privacy",
    weight: 2,
  },
  {
    id: "B14",
    question: "Do you primarily use an authenticator app (like Google Authenticator or Authy) rather than SMS/Text messages for 2FA codes?",
    category: "MFA Method Strength",
    weight: 3, // Higher security method
  },
  {
    id: "B15",
    question: "Have you securely stored your 2FA backup codes in a safe place (not screenshotting them on your phone)?",
    category: "Recovery Planning",
    weight: 2,
  },
  {
    id: "B16",
    question: "If offered, do you use physical security keys (like YubiKey) for high-value accounts?",
    category: "Hardware Protection",
    weight: 3, // Highest security method
  },
  {
    id: "B17",
    question: "Do you avoid approving 2FA requests on your phone when you haven't initiated a login attempt yourself?",
    category: "Push Notification Awareness",
    weight: 3, // Critical against MFA fatigue attacks
  },
  {
    id: "B18",
    question: "Do you have 2FA enabled on your cloud storage accounts (Google Drive, Dropbox, OneDrive)?",
    category: "Cloud Data Security",
    weight: 2,
  },
  {
    id: "B19",
    question: "Do you understand the difference between SMS-based 2FA and app-based 2FA?",
    category: "Conceptual Understanding",
    weight: 2,
  },
  {
    id: "B20",
    question: "Have you enabled 2FA on your password manager account (if it allows it)?",
    category: "Master Key Protection (MFA)",
    weight: 3, // Critical to protect the vault key
  },

  // --- Section C: Identity, Account Recovery, and Monitoring (Weight: 24 points) ---
  {
    id: "C21",
    question: "Is your account recovery phone number and secondary email address up-to-date across all major accounts?",
    category: "Recovery Accuracy",
    weight: 2,
  },
  {
    id: "C22",
    question: "Have you created a strong, unique PIN/Passcode for your SIM card to prevent SIM-swapping attacks?",
    category: "SIM Protection",
    weight: 3, // Critical against SIM swapping
  },
  {
    id: "C23",
    question: "Do you regularly check the 'Logged In Devices' or 'Active Sessions' list in your major accounts (like email) for unrecognized activity?",
    category: "Session Monitoring",
    weight: 2,
  },
  {
    id: "C24",
    question: "Do you use unique or obfuscated answers for security questions (e.g., answering 'The color of my first car' with a random word)?",
    category: "Security Question Evasion",
    weight: 2,
  },
  {
    id: "C25",
    question: "Do you receive and pay attention to alerts from companies (like Google or Microsoft) regarding 'New device logins' or 'Unusual activity?'",
    category: "Alert Responsiveness",
    weight: 2,
  },
  {
    id: "C26",
    question: "Do you actively delete old, inactive accounts that you no longer use?",
    category: "Data Minimization",
    weight: 2,
  },
  {
    id: "C27",
    question: "Do you verify the sender's actual email address (not just the display name) before clicking 'Forgot Password' links sent to you?",
    category: "Phishing Pre-Check",
    weight: 3, // Critical phishing defense
  },
  {
    id: "C28",
    question: "Have you disabled or hidden the display of personal information (like your full birthdate or home address) on social media?",
    category: "Information Minimization",
    weight: 2,
  },
  {
    id: "C29",
    question: "Do you use an alias or pseudonyms when signing up for non-critical, low-trust websites?",
    category: "Identity Segmentation",
    weight: 2,
  },
  {
    id: "C30",
    question: "Do you use your personal, private email address only for essential logins (banking, government) and a separate email for newsletters/spam?",
    category: "Email Segmentation",
    weight: 3, // Limits exposure of primary identity
  },
];

export default behavioralAwarenessQuestions;