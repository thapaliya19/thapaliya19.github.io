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
Hello there! I’m Safal Thapaliya, a second-year PhD student in Computer Science and Engineering at the [University of Connecticut, Storrs](https://uconn.edu/) ([School of Computing](https://computing.engineering.uconn.edu/)), advised by [Prof. Chuxu Zhang](https://chuxuzhang.github.io/).

Research interests and focus:

* Large language models (LLMs)
* Resource-efficient models
* Trustworthiness in graph neural networks (GNNs)
* AI for healthcare

Background:

* B.E. in Computer Engineering, [IOE, Pulchowk Campus](http://pcampus.edu.np/) (2022)
* Research Assistant at [NAAMII](https://naamii.org.np/) (2022–2024), supervised by [Dr. Bishesh Khanal](https://bishesh.github.io/); collaborated with [KIAS](https://kias.org.np/) and [Dr. Taman Upadhaya](https://www.linkedin.com/in/tamanupadhaya/)
  * Worked on vision-language models (VLMs), medical image segmentation, and object detection
  * Built healthcare AI prototypes and deployment-ready pipelines

Other:

* Founding member and developer of [Clamphook](https://clamphook.com/) (2019-2022)
* Internship at [Logpoint](https://logpoint.com/en/)'s Support and Solutions Department (2022); Linux Server Administration, Distributed Log Handling

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
