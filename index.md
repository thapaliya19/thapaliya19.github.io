---
layout: default
title: Safal Thapaliya
lang: en
permalink: /
---

![Photo of Safal Thapaliya](/assets/img/profile.webp){: .profile-img }

# Safal Thapaliya

<div class="contact-line" markdown="1">
[Email](mailto:safalthapaliya@gmail.com) · [Scholar](https://scholar.google.com/citations?user=0yl8rVYAAAAJ) · [LinkedIn](https://www.linkedin.com/in/thapaliya19/) · [GitHub](https://github.com/thapaliya19) · [CV](assets/pdf/safal_cv.pdf)
</div>

---

Hello there. I'm a second-year PhD student at the [University of Connecticut](https://uconn.edu/)'s [School of Computing](https://computing.engineering.uconn.edu/), advised by [Prof. Chuxu Zhang](https://chuxuzhang.github.io/). My work sits at the intersection of large language models, resource-efficient ML, trustworthy graph neural networks, and AI for healthcare.

Before UConn, I was a research assistant at [NAAMII](https://naamii.org.np/) under [Dr. Bishesh Khanal](https://bishesh.github.io/), where I worked on vision-language models, medical image segmentation, and object detection, and shipped healthcare AI prototypes alongside [KIAS](https://kias.org.np/) and [Dr. Taman Upadhaya](https://www.linkedin.com/in/tamanupadhaya/). I earned my B.E. in Computer Engineering from [IOE, Pulchowk Campus](http://pcampus.edu.np/) in 2022. Earlier, I was a founding developer at [Clamphook](https://clamphook.com/) (2019–2022) and interned at [Logpoint](https://logpoint.com/en/) on Linux server administration and distributed log handling.

---

## Publications
\* indicates equal contribution

{% for pub in site.data.publications %}
<div class="pub-entry">
  <div class="pub-head">
    <div class="pub-title"><a href="{{ pub.link }}"><strong>{{ pub.title }}</strong></a></div>
    <div class="pub-year">{{ pub.year }}</div>
  </div>
  <div class="pub-authors">{{ pub.authors | markdownify }}</div>
  <div class="pub-venue"><i>{{ pub.venue }}</i></div>
  {% if pub.note %}
  <div class="pub-note">{{ pub.note }}</div>
  {% endif %}
  <div class="pub-links">
    {% if pub.pdf %}<a href="{{ pub.pdf }}">PDF</a>{% endif %}
    {% if pub.code %}<a href="{{ pub.code }}">Code</a>{% endif %}
  </div>
</div>
{% endfor %}

---
For a complete list of publications, see my [Google Scholar](https://scholar.google.com/citations?user=0yl8rVYAAAAJ).

---

## Projects

{% for project in site.data.projects %}
<div class="pub-entry">
  <div class="pub-title">
    {% if project.link %}
      <a href="{{ project.link }}"><strong>{{ project.title }}</strong></a>
    {% else %}
      <strong>{{ project.title }}</strong>
    {% endif %}
  </div>
  <div class="pub-authors">{{ project.description | markdownify }}</div>
  {% if project.link and project.link_text %}
  <div class="pub-links"><a href="{{ project.link }}">{{ project.link_text }}</a></div>
  {% endif %}
</div>
{% endfor %}
