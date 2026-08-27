---
layout: default
title: Safal Thapaliya
lang: en
permalink: /
---

<section class="section section-plain" markdown="1">

<div class="hero">
  <img src="/assets/img/profile.webp" alt="Safal Thapaliya" class="hero-avatar">
  <div class="hero-body">
    <h1 class="hero-name">Safal Thapaliya</h1>
    <p class="hero-tagline">PhD student, UConn <br> LLMs, GNNs, AI for healthcare.</p>
    <div class="hero-links">
      <a href="mailto:safal.thapaliya[at]uconn.edu">safal.thapaliya[at]uconn.edu</a> · <a href="https://scholar.google.com/citations?user=0yl8rVYAAAAJ">scholar</a> · <a href="https://www.linkedin.com/in/thapaliya19/">linkedIn</a> · <a href="https://github.com/thapaliya19">github</a> · <a href="/assets/pdf/safal_cv.pdf">cv</a>
    </div>
  </div>
</div>

## bio

I'm a second year PhD student in Computer Science and Engineering at the University of Connecticut working on large language models, graph neural networks, and AI for healthcare. Before UConn, I built healthcare AI prototypes and vision-language segmentation models at NAAMII in Nepal. 

I love to play football (not the american one) and watch any sports that I find interesting.


</section>

<section class="section section-lokta" markdown="1">

<div class="timeline">
{% for entry in site.data.timeline %}
<div class="tl-year">{{ entry.year }}</div>
<div class="tl-body">{{ entry.body | markdownify | remove: '<p>' | remove: '</p>' }}</div>
{% endfor %}
</div>

</section>

<section class="section section-plain" markdown="1">

## publications

<p class="pub-note">* indicates equal contribution</p>

<div class="pub-list">
{% for pub in site.data.publications %}
<div class="pub-entry">
  <div class="pub-line">
    <a class="pub-title" href="{{ pub.link }}">{{ pub.title }}</a>
    <span class="pub-venue">{{ pub.venue }} {{ pub.year }}{% if pub.note %} ({{ pub.note }}){% endif %}</span>
    {% if pub.pdf %}<a class="pub-link" href="{{ pub.pdf }}">[pdf]</a>{% endif %}
    {% if pub.code %}<a class="pub-link" href="{{ pub.code }}">[code]</a>{% endif %}
  </div>
  <div class="pub-authors">{{ pub.authors | markdownify }}</div>
</div>
{% endfor %}
</div>

For a complete list of publications, see my [Google Scholar](https://scholar.google.com/citations?user=0yl8rVYAAAAJ).

</section>
