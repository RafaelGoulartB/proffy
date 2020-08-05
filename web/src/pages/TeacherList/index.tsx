import React from "react";
import "./styles.css";

import PageHeader from "../../components/PageHeader/";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

export default function TeacherList() {
  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Esses são os Proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />

          <Input name="week_day" label="Dia da Semana" />

          <Input name="time" label="Hora" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
