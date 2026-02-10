---
layout: default
title: सफल थपलिया 
lang: ne
permalink: /ne/
---

# नमस्ते, के छ हजुर?


{% assign ne_sections = site.data.ne_sections %}

{% if ne_sections and ne_sections.size > 0 %}
<nav class="ne-topic-nav" aria-label="नेपाली पृष्ठका विषयहरू">
  <span class="ne-topic-nav-label">विषय:</span>
  {% for section in ne_sections %}
  <a href="#{{ section.id }}" class="ne-topic-link">{{ section.nav_label | default: section.title }}</a>
  {% endfor %}
</nav>

{% for section in ne_sections %}
<div id="{{ section.id }}" class="ne-topic-section"></div>
## {{ section.title }}
{% if section.description %}
<p>{{ section.description }}</p>
{% endif %}

{% assign items = site.data[section.data_file] %}
{% case section.type %}
{% when "songs" %}
<div class="song-list">
  {% for song in items %}
  <div class="song-card">
    <div class="song-title"><a href="{{ song.link }}">{{ song.title }}</a></div>
    <div class="song-meta">{{ song.artist }}</div>
    {% if song.note %}
    <div class="song-note">{{ song.note }}</div>
    {% endif %}
  </div>
  {% endfor %}
</div>
{% else %}
{% if items and items.size > 0 %}
<ul class="ne-generic-list">
  {% for item in items %}
  <li>
    {% if item.link %}
    <a href="{{ item.link }}">{{ item.title }}</a>
    {% else %}
    {{ item.title }}
    {% endif %}
    {% if item.description %}
    <span class="ne-generic-desc"> - {{ item.description }}</span>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>यो विषयको सामग्री चाँडै आउँछ।</p>
{% endif %}
{% endcase %}
{% endfor %}
{% else %}
<p>छिट्टै नयाँ सामग्री राखिन्छ।</p>
{% endif %}

---
ओके बाई-बाई, आउदै गर्नु ल
