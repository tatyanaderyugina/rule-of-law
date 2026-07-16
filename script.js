// Open external links in a new tab; internal navigation stays in the same tab.
document.querySelectorAll('a').forEach(function(link) {
  if (link.hostname && link.hostname !== window.location.hostname) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});
