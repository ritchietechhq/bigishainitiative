/**
 * Accessibility utilities for WCAG 2.1 AA compliance
 */

export function skipToMainContent() {
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.focus();
    mainContent.scrollIntoView();
  }
}

export function announceToScreenReader(message: string) {
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
}

export function setPageTitle(title: string) {
  document.title = title;
  // Announce to screen readers
  announceToScreenReader(`Page changed to ${title}`);
}

export const keyboardShortcuts = {
  focusSearch: "Ctrl+/",
  focusNav: "Ctrl+N",
  skipToMain: "Ctrl+M",
};
