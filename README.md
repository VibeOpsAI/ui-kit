# VibeOps UI Kit

This project is a fork and heavy modification of the original [cnblocks](https://github.com/Meschacirung/cnblocks) project by [Meschacirung](https://github.com/Meschacirung). We've significantly modified the original codebase to create a comprehensive UI kit with enhanced features and styling.

## About

This is a modified version of the original cnblocks project, which provides responsive, pre-built shadcn-UI blocks designed for marketing websites. We've made significant modifications to the original codebase to suit our specific needs.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

We welcome contributions to VibeOps UI Kit! Here's how you can add new previews:

### Adding New Previews

1. Create a new preview page in the following structure:
   ```
   app/preview/[category]/[variant]/page.tsx
   ```
   Example: `app/preview/login/split/page.tsx`

2. Implement your UI component using the existing components from `components/ui/`

3. Add your preview to the blocks configuration in `data/blocks.ts`:
   ```typescript
   {
     slug: string,        // URL-friendly name
     title: string,       // Display name
     category: string,    // Category name
     preview: string,     // Preview path
     code: string         // Code content
   }
   ```

4. Your preview will be accessible at:
   - Direct preview: `/preview/[category]/[variant]`
   - Category view: `/[category]`

### Best Practices

- Use existing UI components from `components/ui/`
- Follow established styling patterns
- Ensure your preview is responsive
- Include proper TypeScript types
- Use the existing layout structure
- Test your preview at both routes

For detailed guidelines, see [.cursor/rule](.cursor/rule)

## License

This project is licensed under the MIT License - see the LICENSE file for details.