# Calculadora Industrial de Tensão e Corrente de Baterias

## 📋 Visão Geral

Esta aplicação web foi desenvolvida especificamente para fins industriais, fornecendo cálculos precisos de tensão e corrente para sistemas de baterias. A ferramenta permite dimensionamento adequado de bancos de baterias em configurações série e paralelo, essencial para aplicações industriais que requerem alimentação confiável e contínua.

## ⚡ Funcionalidades

### Cálculos Automatizados
- **Tensão de Carga**: Cálculo automático baseado no tipo de bateria selecionado
- **Corrente de Carga**: Cálculo baseado na capacidade da bateria (AH) com margem de segurança de 10%
- **Total de Baterias**: Contagem total considerando configurações série e paralelo

### Tipos de Bateria Suportados
- **12V**: Tensão de carga de 14,1V (baterias automotivas/industriais)
- **6V**: Tensão de carga de 7,05V (baterias de tração)
- **2V**: Tensão de carga de 2,4V (baterias de célula individual)

### Configurações de Banco
- **Série**: Aumenta a tensão total do sistema
- **Paralelo**: Aumenta a capacidade total (AH) e corrente de carga
- **Misto**: Combinação de série e paralelo para otimização

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design responsivo com foco em usabilidade industrial
- **JavaScript (ES6+)**: Lógica de cálculo e interatividade
- **Google Fonts**: Tipografia profissional (Outfit)

## 🚀 Instalação e Uso

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional para desenvolvimento)

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/Tensao-Corrente.git
```

2. Navegue até o diretório:
```bash
cd Tensao-Corrente
```

3. Abra o arquivo `index.html` em seu navegador ou configure um servidor web local.

### Como Usar
1. **Selecione o tipo de bateria**: Escolha entre 12V, 6V ou 2V
2. **Insira a capacidade**: Digite a capacidade da bateria em Ampère-hora (AH)
3. **Configure as séries**: Número de baterias em série
4. **Configure os paralelos**: Número de baterias em paralelo
5. **Calcule**: Clique em "calcular" para obter os resultados

## 📊 Exemplo de Cálculo

**Cenário Industrial**: Sistema de backup para equipamentos críticos
- **Tipo**: Bateria 12V
- **Capacidade**: 100AH
- **Série**: 4 baterias
- **Paralelo**: 2 baterias

**Resultado**:
- Tensão de Carga: 56,4V (4 × 14,1V)
- Corrente de Carga: 20A (10% de 100AH × 2 paralelos)
- Total de Baterias: 8 unidades

## 🏭 Aplicações Industriais

### Setores de Aplicação
- **Energia**: Sistemas de backup e UPS industriais
- **Telecomunicações**: Centrais telefônicas e torres de transmissão
- **Automação**: Sistemas de controle e monitoramento
- **Transporte**: Veículos elétricos e sistemas de tração
- **Data Centers**: Sistemas de alimentação ininterrupta

### Benefícios para a Indústria
- **Precisão**: Cálculos baseados em padrões industriais
- **Eficiência**: Dimensionamento otimizado de sistemas
- **Confiabilidade**: Margem de segurança de 10% na corrente
- **Facilidade de uso**: Interface intuitiva para técnicos
- **Portabilidade**: Acesso via navegador em qualquer dispositivo

## ⚠️ Considerações Técnicas

### Margem de Segurança
A aplicação aplica automaticamente uma margem de segurança de 10% na corrente de carga, seguindo as melhores práticas industriais para prolongar a vida útil das baterias.

### Limitações
- Cálculos baseados em baterias de chumbo-ácido
- Não considera fatores ambientais (temperatura, umidade)
- Para aplicações críticas, consulte sempre um engenheiro especializado

## 📝 Licença

Este projeto está licenciado sob a licença especificada no arquivo LICENSE.

## 🤝 Contribuições

Contribuições são bem-vindas! Para aplicações industriais, priorizamos:
- Melhorias na precisão dos cálculos
- Suporte a novos tipos de bateria
- Validações adicionais de entrada
- Relatórios de cálculo mais detalhados

## 📞 Suporte

Para suporte técnico ou dúvidas sobre implementação industrial, entre em contato através dos issues do repositório.

---

**Desenvolvido para aplicações industriais críticas** ⚡

