---
layout: default
title: Safal Thapaliya
lang: en
permalink: /
---

![Profile Image](/assets/img/profile.webp){: .profile-img }

# Safal Thapaliya  
[Email](mailto:safalthapaliya@gmail.com) | [Google Scholar](https://scholar.google.com/citations?user=0yl8rVYAAAAJ) | [LinkedIn](https://www.linkedin.com/in/thapaliya19/) | [GitHub](https://github.com/thapaliya19) | [CV](assets/pdf/safal_cv.pdf)

---
Hello there! I am Safal Thapaliya. I am a first year PhD student in Computer Science and Engineering at the School of Computing, [University of Connecticut](https://uconn.edu/).
At UConn, I work in the [MINDS Lab](https://chuxuzhang.github.io/Lab/lab_index.html) supervised by [Prof. Chuxu Zhang](https://chuxuzhang.github.io/).
My research currently focuses on the intersection of graph learning and large language models.
I am working on leveraging large language models (LLMs) to generate good representations for text-attributed graphs.

Before joining UConn, I worked at Nepal Applied Mathematics and Informatics Institute for research ([NAAMII](https://naamii.org.np/)), supervised by [Bishesh Khanal, Ph.D.](https://bishesh.github.io/), where my primary research focus was on using vision-language models for medical image segmentation.

## Research Interests

I am mainly interested in developing resource-efficient techniques to utilize data of different modalities for resource-constrained settings.
Recently, I am working in leveraging LLMs to describe the topological information of graph data.

---

## Publications
\* indicates equal contribution

{% for pub in site.data.publications %}
<div class="pub-entry">
  <div class="pub-title"><a href="{{ pub.link }}"> <strong>{{ pub.title }}</strong> </a></div>
  <div class="pub-authors">{{ pub.authors | markdownify}} ({{ pub.year }})</div>
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
For a complete list of publications, see my [google scholar](https://scholar.google.com/citations?user=0yl8rVYAAAAJ).
